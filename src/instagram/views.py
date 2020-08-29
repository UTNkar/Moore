from instagram.utils import InstagramUtils
from instagram.models import InstagramFeed
from django.shortcuts import redirect
import datetime
from django.utils import timezone
from django.contrib import messages
from django.utils.translation import ugettext_lazy as _


def code_from_instagram(request):
    """
    When a user has authenticated their instagram account,
    Instagram sends a request to this view with a code.
    This code is then used to retreive a long lived token.
    """
    code = request.GET.get("code")
    access_token, user_id, expires_in = \
        InstagramUtils.get_long_lived_token(code)

    expires = timezone.now() + datetime.timedelta(seconds=expires_in)
    account_name = InstagramUtils.get_account_name(access_token)

    InstagramFeed.objects.update_or_create(
        access_token=access_token,
        expires=expires,
        account_name=account_name
    )

    messages.success(request, _("Your Instagram account was added"))
    return redirect("/admin/instagram/instagramfeed/")
