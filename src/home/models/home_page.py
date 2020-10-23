from __future__ import absolute_import, unicode_literals
from django.db import models
from django.utils.translation import gettext_lazy as _
from wagtail.admin.edit_handlers import InlinePanel, FieldPanel, \
        StreamFieldPanel, TabbedInterface, ObjectList, MultiFieldPanel
from wagtail.core.fields import StreamField
from wagtail.core.models import Page
from wagtail.core.blocks import RawHTMLBlock
from blocks.models import WAGTAIL_STATIC_BLOCKTYPES
from news.models import LatestNewsBlock
from utils.translation import TranslatedField
from wagtail.api import APIField


class HomePage(Page):
    # ---- General Page information ------
    title_sv = models.CharField(max_length=255)
    translated_title = TranslatedField('title', 'title_sv')
    show_searchbar = models.BooleanField(default=True)
    add_whitespace_bottom = models.BooleanField(default=True)

    body_en = StreamField(
        WAGTAIL_STATIC_BLOCKTYPES + [
            ('news', LatestNewsBlock()),
            ('html', RawHTMLBlock(group="Basic")),
        ],
        blank=True,
    )
    body_sv = StreamField(
        WAGTAIL_STATIC_BLOCKTYPES + [
            ('news', LatestNewsBlock()),
            ('html', RawHTMLBlock(group="Basic")),
        ],
        blank=True,
    )
    body = TranslatedField('body_en', 'body_sv')

    banner_panels = [InlinePanel('banners', label=_('Banner'))]

    content_panels_en = Page.content_panels + [
        StreamFieldPanel('body_en'),
    ]

    content_panels_sv = [
        FieldPanel('title_sv', classname="full title"),
        StreamFieldPanel('body_sv'),
    ]

    custom_settings_panel = Page.settings_panels + [
        MultiFieldPanel(
            [
                FieldPanel('show_searchbar'),
                FieldPanel('add_whitespace_bottom')
            ],
            heading='Banner settings',
            classname='utn-extra-margin'
        )
    ]

    edit_handler = TabbedInterface([
        ObjectList(banner_panels, heading=_('Banners')),
        ObjectList(content_panels_en, heading=_('English')),
        ObjectList(content_panels_sv, heading=_('Swedish')),
        ObjectList(Page.promote_panels, heading=_('Promote')),
        ObjectList(custom_settings_panel, heading=_('Settings')),
    ])

    api_fields = [
        APIField('title_sv'),
        APIField('body_en'),
        APIField('body_sv'),
    ]
