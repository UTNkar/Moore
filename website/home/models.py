from __future__ import absolute_import, unicode_literals

from django.db import models
from django.utils.translation import ugettext_lazy as _
from modelcluster.fields import ParentalKey
from wagtail.wagtailadmin.edit_handlers import InlinePanel, MultiFieldPanel, \
    FieldRowPanel, FieldPanel, StreamFieldPanel
from wagtail.wagtailcore.fields import StreamField
from wagtail.wagtailcore.models import Page, Orderable
from wagtail.wagtailimages.edit_handlers import ImageChooserPanel

from blocks.models import WAGTAIL_CONTENT_BLOCKTYPES
from utils.translation import TranslatedField


class HomePage(Page):
    # ---- General Page information ------
    title_sv = models.CharField(max_length=255)
    translated_title = TranslatedField('title', 'title_sv')

    body_en = StreamField(
        WAGTAIL_CONTENT_BLOCKTYPES,
        blank=True,
    )
    body_sv = StreamField(
        WAGTAIL_CONTENT_BLOCKTYPES,
        blank=True,
    )
    body = TranslatedField('body_en', 'body_sv')

    content_panels = Page.content_panels + [
        FieldPanel('title_sv'),
        StreamFieldPanel('body_en'),
        StreamFieldPanel('body_sv'),
        InlinePanel('banners', label=_('Banner')),
    ]


class Banner(Orderable):
    page = ParentalKey(
        HomePage,
        related_name='banners',
        on_delete=models.CASCADE,
        blank=False,
    )

    image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    title_en = models.CharField(
        max_length=255,
        verbose_name=_('English banner title'),
        help_text=_('Enter the title to be shown on the banner.'),
        blank=True,
    )

    title_sv = models.CharField(
        max_length=255,
        verbose_name=_('Swedish banner title'),
        help_text=_('Enter the title to be shown on the banner.'),
        blank=True,
    )

    title = TranslatedField('title_en', 'title_sv')

    text_en = models.TextField(
        verbose_name=_('English banner text'),
        help_text=_('Enter a text to be shown on the banner.'),
        blank=True,
    )

    text_sv = models.TextField(
        verbose_name=_('Swedish banner text'),
        help_text=_('Enter a text to be shown on the banner.'),
        blank=True,
    )

    text = TranslatedField('text_en', 'text_sv')

    link = models.URLField(
        verbose_name=_('Button URL'),
        blank=True,
    )

    button_en = models.TextField(
        verbose_name=_('English button text'),
        help_text=_('Enter the text to be displayed on the button.'),
        blank=True,
    )

    button_sv = models.TextField(
        verbose_name=_('Swedish button text'),
        help_text=_('Enter the text to be displayed on the button.'),
        blank=True,
    )

    button = TranslatedField('button_en', 'button_sv')

    # ------ Administrator settings ------
    panels = [MultiFieldPanel([
        ImageChooserPanel('image'),
        FieldRowPanel([
            FieldPanel('title_en'),
            FieldPanel('title_sv'),
        ]),
        FieldPanel('text_en'),
        FieldPanel('text_en'),
        FieldPanel('link'),
        FieldRowPanel([
            FieldPanel('button_en'),
            FieldPanel('button_sv'),
        ]),
    ])]
