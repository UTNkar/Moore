from django.conf.urls import url

from involvement import views

urlpatterns = [
    url(
        r'^admin/involvement/position/elect/(\d+)/$',
        views.admin_approve_applicants,
        name='involvement_position_modeladmin_approve'
    ),
    url(
        r'^admin/involvement/position/appoint/(\d+)/$',
        views.admin_appoint,
        name='involvement_position_modeladmin_appoint'
    ),
    url(
        r'^admin/involvement/position/extend/(\d+)/$',
        views.admin_extend_deadline,
        name='involvement_position_extend'
    ),
]
