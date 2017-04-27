from datetime import date

from django.contrib import admin
from django.contrib.admin.utils import quote
from django.contrib.auth import get_permission_codename
from django.db.models import Q
from django.utils import timezone
from django.utils.translation import ugettext_lazy as _
from wagtail.contrib.modeladmin.helpers import ButtonHelper
from wagtail.contrib.modeladmin.options import ModelAdmin, ModelAdminGroup, \
    modeladmin_register
from wagtail.contrib.modeladmin.views import CreateView, EditView

from involvement.models import Team, Role, Position, Application, \
    official_of, member_of
from involvement.rules import is_admin, approve_state, appoint_state
from utils.permissions import RulesPermissionHelper


class TeamAdmin(ModelAdmin):
    model = Team
    menu_label = _('Teams')
    menu_icon = 'fa-sitemap'
    menu_order = 100
    list_display = ('name_en', 'name_sv', 'group')
    search_fields = ('name_en', 'name_sv', 'description_en', 'description_sv')
    permission_helper_class = RulesPermissionHelper
    inspect_view_enabled = True

    def get_queryset(self, request):
        if is_admin(request.user):
            return super(TeamAdmin, self).get_queryset(request)
        else:
            teams = official_of(request.user, pk=True)
            qs = Team.objects.filter(id__in=teams)
            ordering = self.get_ordering(request)
            if ordering:
                qs = qs.order_by(*ordering)
            return qs


class RoleCreateView(CreateView):
    def get_form(self, form_class=None):
        form = super(RoleCreateView, self).get_form(form_class=form_class)
        if not is_admin(self.request.user):
            form.fields['team'].queryset = official_of(self.request.user)
        return form


class RoleEditView(EditView):
    def get_form(self, form_class=None):
        form = super(RoleEditView, self).get_form(form_class=form_class)
        if not is_admin(self.request.user):
            form.fields['team'].queryset = official_of(self.request.user)
        return form


class RoleAdmin(ModelAdmin):
    model = Role
    menu_label = _('Roles')
    menu_icon = 'fa-suitcase'
    menu_order = 200
    list_display = ('team', 'name_en', 'name_sv', 'archived')
    search_fields = ('team__name_en', 'team__name_sv', 'name_en', 'name_sv',
                     'description_en', 'description_sv')
    # TODO: Default to archived==False, might be in
    # https://code.djangoproject.com/ticket/8851#no1
    list_filter = ('team', 'archived')
    permission_helper_class = RulesPermissionHelper
    create_view_class = RoleCreateView
    edit_view_class = RoleEditView

    def get_queryset(self, request):
        if is_admin(request.user):
            return super(RoleAdmin, self).get_queryset(request)
        else:
            teams = official_of(request.user)
            qs = Role.objects.filter(team__in=teams)
            ordering = self.get_ordering(request)
            if ordering:
                qs = qs.order_by(*ordering)
            return qs


class PositionYearFilter(admin.SimpleListFilter):
    title = _('year')

    parameter_name = 'year'
    parameter = 'year'

    def lookups(self, request, model_admin):
        return (
            ('this', _('This Year')),
            ('last', _('Last Year')),
            ('before', _('Before')),
        )

    def queryset(self, request, queryset):
        now = timezone.now()
        # When time zone support is enabled, convert "now" to the user's time
        # zone so Django's definition of "Today" matches what the user expects.
        if timezone.is_aware(now):
            now = timezone.localtime(now)

        this_year = now.replace(
            month=1, day=1, hour=0, minute=0, second=0, microsecond=0
        )
        next_year = date(year=this_year.year + 1, month=1, day=1)
        last_year = date(year=this_year.year - 1, month=1, day=1)

        if self.value() == 'this':
            return queryset.filter(
                term_from__gte=this_year,
                term_from__lt=next_year
            )
        elif self.value() == 'last':
            return queryset.filter(
                term_from__gte=last_year,
                term_from__lt=this_year
            )
        elif self.value() == 'before':
            return queryset.filter(term_from__lt=last_year)


class PositionPermissionHelper(RulesPermissionHelper):
    def user_can_approve_obj(self, user, obj):
        opts = self.opts
        codename = get_permission_codename('approve', opts)
        return user.has_perm('%s.%s' % (opts.app_label, codename), obj)

    def user_can_appoint_obj(self, user, obj):
        opts = self.opts
        codename = get_permission_codename('appoint', opts)
        return user.has_perm('%s.%s' % (opts.app_label, codename), obj)


class PositionButtonHelper(ButtonHelper):
    def approve_button(self, pk, classnames_add=None, classnames_exclude=None):
        if classnames_add is None:
            classnames_add = []
        if classnames_exclude is None:
            classnames_exclude = []
        classnames = self.edit_button_classnames + classnames_add
        cn = self.finalise_classname(classnames, classnames_exclude)
        return {
            'url': self.url_helper.get_action_url('approve', quote(pk)),
            'label': _('Approve'),
            'classname': cn,
            'title': _('Approve applicants for %s') % self.verbose_name,
        }

    def appoint_button(self, pk, classnames_add=None, classnames_exclude=None):
        if classnames_add is None:
            classnames_add = []
        if classnames_exclude is None:
            classnames_exclude = []
        classnames = self.edit_button_classnames + classnames_add
        cn = self.finalise_classname(classnames, classnames_exclude)
        return {
            'url': self.url_helper.get_action_url('appoint', quote(pk)),
            'label': _('Appoint'),
            'classname': cn,
            'title': _('Appoint member to %s') % self.verbose_name,
        }

    def get_buttons_for_obj(self, obj, exclude=None, classnames_add=None,
                            classnames_exclude=None):
        btns = []
        if exclude is None:
            exclude = []
        if classnames_add is None:
            classnames_add = []
        if classnames_exclude is None:
            classnames_exclude = []
        ph = self.permission_helper
        usr = self.request.user
        pk = quote(getattr(obj, self.opts.pk.attname))
        if 'approve' not in exclude and approve_state(usr, obj)\
                and ph.user_can_approve_obj(usr, obj):
            btns.append(
                self.approve_button(
                    pk, classnames_add, classnames_exclude
                )
            )
        if 'appoint' not in exclude and appoint_state(usr, obj)\
                and ph.user_can_appoint_obj(usr, obj):
            btns.append(
                self.appoint_button(
                    pk, classnames_add, classnames_exclude
                )
            )
        btns += super(PositionButtonHelper, self).get_buttons_for_obj(
            obj, exclude=exclude, classnames_add=classnames_add,
            classnames_exclude=classnames_exclude
        )
        return btns


class PositionCreateView(CreateView):
    def get_form(self, form_class=None):
        form = super(PositionCreateView, self).get_form(form_class=form_class)
        queryset = form.fields['role'].queryset
        queryset = queryset.filter(
            archived=False
        )
        if not is_admin(self.request.user):
            teams = official_of(self.request.user)
            queryset = queryset.filter(
                team__in=teams
            )
        form.fields['role'].queryset = queryset
        return form


class PositionEditView(EditView):
    def get_form(self, form_class=None):
        form = super(PositionEditView, self).get_form(form_class=form_class)
        queryset = form.fields['role'].queryset
        init = Role.objects.get(pk=form.initial['role'])
        if not init.archived:
            queryset = queryset.filter(
                archived=False
            )
        if not is_admin(self.request.user):
            teams = official_of(self.request.user)
            queryset = queryset.filter(
                team__in=teams
            )
        form.fields['role'].queryset = queryset
        return form


class PositionAdmin(ModelAdmin):
    model = Position
    menu_label = _('Positions')
    menu_icon = 'fa-address-card'
    menu_order = 300
    list_display = ('role', 'appointments', 'term_from', 'term_to')
    search_fields = ('role__team__name_en', 'role__team__name_sv',
                     'role__name_en', 'role__name_sv', 'comment_en',
                     'comment_sv')
    list_filter = ('role__team', PositionYearFilter)
    permission_helper_class = PositionPermissionHelper
    button_helper_class = PositionButtonHelper
    create_view_class = PositionCreateView
    edit_view_class = PositionEditView

    def get_queryset(self, request):
        if is_admin(request.user):
            return super(PositionAdmin, self).get_queryset(request)
        else:
            official_teams = official_of(request.user)
            teams = member_of(request.user)
            qs = Position.objects.filter(
                Q(role__team__in=official_teams)
                | Q(approval_committee__in=teams)
            )
            ordering = self.get_ordering(request)
            if ordering:
                qs = qs.order_by(*ordering)
            return qs


class ApplicationAdmin(ModelAdmin):
    model = Application
    menu_label = _('Applications')
    menu_icon = 'mail'
    menu_order = 400
    list_display = ('position', 'applicant', 'status')
    list_filter = ('position__role__team', 'status')
    search_fields = (
        'position__role__team__name_en', 'position__role__team__name_sv',
        'position__role__name_en', 'position__role__name_sv',
        'applicant__first_name', 'applicant__last_name',
    )
    permission_helper_class = RulesPermissionHelper


class InvolvementAdminGroup(ModelAdminGroup):
    menu_label = _('Involvement')
    menu_icon = 'fa-address-book'
    menu_order = 500
    items = (TeamAdmin, RoleAdmin, PositionAdmin, ApplicationAdmin)


modeladmin_register(InvolvementAdminGroup)
