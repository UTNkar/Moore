from django.contrib.admin.utils import quote
from django.templatetags.static import static
from django.utils.html import format_html
from django.utils.translation import gettext_lazy as _
from wagtail.core import hooks
from wagtail.contrib.modeladmin.helpers import ButtonHelper
from wagtail.contrib.modeladmin.options import ModelAdmin, ModelAdminGroup, \
    modeladmin_register
from events.models import Event, Ticket, Costs, EventApplication, Participant


@hooks.register("insert_global_admin_css", order=100)
def global_admin_css():
    return format_html(
        '<link rel="stylesheet" type="text/css" href="{}">',
        static("css/admin.css")
    )


class EventButtonHelper(ButtonHelper):
    def assign_tickets_button(self, pk, classnames_add, classnames_exclude):
        if classnames_add is None:
            classnames_add = []
        if classnames_exclude is None:
            classnames_exclude = []

        classnames = self.edit_button_classnames + classnames_add
        cn = self.finalise_classname(classnames, classnames_exclude)
        text = _('Assign tickets')

        return {
            'url': self.url_helper.get_action_url('assign_tickets', quote(pk)),
            'label': text,
            'classname': cn,
            'title': _('Assign applicants to tickets randomly')
        }

    def unassign_unpaid_button(self, pk, classnames_add, classnames_exclude):
        if classnames_add is None:
            classnames_add = []
        if classnames_exclude is None:
            classnames_exclude = []

        classnames = self.edit_button_classnames + classnames_add
        cn = self.finalise_classname(classnames, classnames_exclude)
        text = _('Unassign unpaid tickets')

        return {
            'url': self.url_helper.get_action_url('unassign_unpaid_tickets',
                                                  quote(pk)),
            'label': text,
            'classname': cn,
            'title': _('Unassign unpaid tickets and '
                       'clear participant information')
        }

    def remove_applications_button(self, pk,
                                   classnames_add,
                                   classnames_exclude):
        if classnames_add is None:
            classnames_add = []
        if classnames_exclude is None:
            classnames_exclude = []

        classnames = self.edit_button_classnames + classnames_add
        cn = self.finalise_classname(classnames, classnames_exclude)
        text = _('Remove applications')

        return {
            'url': self.url_helper.get_action_url(
                'remove_applications', quote(pk)
            ),
            'label': text,
            'classname': cn,
            'title': text,
        }

    def export_participants_button(self, pk,
                                   classnames_add,
                                   classnames_exclude):
        if classnames_add is None:
            classnames_add = []
        if classnames_exclude is None:
            classnames_exclude = []

        classnames = self.edit_button_classnames + classnames_add
        cn = self.finalise_classname(classnames, classnames_exclude)
        text = _('Export participants')

        return {
            'url': self.url_helper.get_action_url(
                'export_participants', quote(pk)
            ),
            'label': text,
            'classname': cn,
            'title': text,
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
        pk = quote(getattr(obj, self.opts.pk.attname))
        btns += super(EventButtonHelper, self).get_buttons_for_obj(
            obj, exclude=exclude, classnames_add=classnames_add,
            classnames_exclude=classnames_exclude)

        btns.append(self.assign_tickets_button(
            pk, classnames_add, classnames_exclude))

        btns.append(self.unassign_unpaid_button(
            pk, classnames_add, classnames_exclude))

        btns.append(self.remove_applications_button(
            pk, classnames_add, classnames_exclude))

        btns.append(self.export_participants_button(
            pk, classnames_add, classnames_exclude))

        return btns


class EventAdmin(ModelAdmin):
    model = Event
    menu_label = _('Events')
    menu_icon = 'fa-star'
    menu_order = 100
    button_helper_class = EventButtonHelper
    add_to_settings_menu = False
    list_display = ('title', 'description')


class CostsAdmin(ModelAdmin):
    model = Costs
    menu_label = _('Price lists')
    menu_icon = 'fa-money'
    menu_order = 200
    add_to_settings_menu = False


class TicketAdmin(ModelAdmin):
    model = Ticket
    menu_label = _('Tickets')
    menu_icon = 'fa-ticket'
    menu_order = 300
    list_display = ['owner_person_nr', 'owner_email', 'event', 'ticket_number',
                    'total_payment']
    list_filter = ('event', 'payment_status')
    list_export = ('event', 'owner_person_nr', 'owner_email',
                   'ticket_number', 'payment_status')
    search_fields = ('owner__person_nr', 'owner__email')
    add_to_settings_menu = False

    def owner_person_nr(self, obj):
        owner = obj.owner
        if owner:
            return str(obj.owner.person_nr)
        else:
            "None"

    def owner_email(self, obj):
        owner = obj.owner
        if owner:
            return str(obj.owner.email)
        else:
            return "No email"


class EventApplicationAdmin(ModelAdmin):
    model = EventApplication
    menu_label = _('Event applications')
    menu_icon = 'fa-file-text-o'
    list_display = ['event_applicant_person_nr',
                    'event_applicant_email',
                    'event',
                    'ticket']
    list_export = ('event', 'event_applicant',
                   'event_applicant_email', 'event_applicant_ticket_number')
    list_filter = ('event',)
    search_fields = ('event_applicant__person_nr', 'event_applicant__email')
    menu_order = 400
    add_to_settings_menu = False

    def event_applicant_person_nr(self, obj):
        owner = obj.event_applicant
        if owner:
            return str(owner.person_nr)
        else:
            "None"

    def event_applicant_email(self, obj):
        owner = obj.event_applicant
        if owner:
            return str(owner.email)
        else:
            return "No email"

    def event_applicant_ticket_number(self, obj):
        if obj.ticket:
            return str(obj.ticket.ticket_number)
        else:
            return "-"


class ParticipantAdmin(ModelAdmin):
    model = Participant
    menu_label = _('Participants')
    list_display = ['name',
                    'person_nr',
                    'formatted_order',
                    'ticket']
    list_export = ('name', 'person_nr', 'formatted_order', 'ticket')
    list_filter = ('ticket__event',)
    menu_icon = 'fa-user-plus'
    menu_order = 200
    add_to_settings_menu = False

    def formatted_order(self, obj):
        s = ""
        for key in obj.order:
            s += "{}: {} | ".format(key, obj.order.get(key, "-"))
        return s


class EventAdminGroup(ModelAdminGroup):
    menu_label = _('Events')
    menu_icon = 'fa-star'
    menu_order = 600
    items = (EventAdmin, CostsAdmin, TicketAdmin,
             EventApplicationAdmin, ParticipantAdmin)


modeladmin_register(EventAdminGroup)
