from django.db import models
from django.apps import apps
from django.conf import settings
from django.db import models
from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
from django.utils.translation import gettext_lazy as _
from modelcluster.models import ClusterableModel
from wagtail.admin.edit_handlers import MultiFieldPanel, FieldPanel, \
    InlinePanel, FieldRowPanel
from wagtail.images.edit_handlers import ImageChooserPanel
from members.fields import PersonNumberField
from jsonschemaform.admin.widgets.jsonschema_widget import JSONSchemaWidget

schema = {
    "title": "Price list",
    "description": "Each entry in this list is considered an orderable item.",
    "type": "array",
    "format": "table",
    "items": {
        "type": "object",
        "properties": {
            "Name": { "type": "string" },
            "Price": { "type": "integer" },
            "Type": {
                "type": "string",
                "default": "Checkbox",
                "enum": ["number", "checkbox", "Dropdown"]
            },
            "Choices": {
                "type": "array",
                "format": "table",
                "items": {
                    "type": "string",
                },
                "description": "These are only in effect if the type of choice is Dropdown"
            }
        }
    }
}

class Costs(models.Model):
    name = models.CharField(
        help_text=_('This field identifies the cost list.'),
        verbose_name=_('Cost list name'),
        max_length=255
    )

    fields = models.JSONField(
        help_text=_('These fields determine what each participant can '
                    'purchase. They each need their name (key) and '
                    'field type.'),
        verbose_name=_('Purchaseable items'))

    panels = [MultiFieldPanel([
        FieldPanel('name'),
        FieldPanel('fields', widget=JSONSchemaWidget(schema))
    ])]

    class Meta:
        verbose_name = _('Costs')
        verbose_name_plural = _('Costs')
        default_permissions = ()
        ordering = ['name']

    def __str__(self):
        return self.name