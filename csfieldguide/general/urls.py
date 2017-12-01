"""URL routing for the general application."""

from django.conf.urls import url

from . import views

urlpatterns = [
	# e.g. csfieldguide.com/
    url(
    	r"^$",
    	views.GeneralIndexView.as_view(),
    	name="home"
    ),
    # e.g. /about
    url(
    	r"^about$",
    	views.GeneralAboutView.as_view(),
    	name="about"
    ),
    # e.g. /contributors
    url(
    	r"^contributors$",
    	views.GeneralContributorsView.as_view(),
    	name="contributors"
    )
]
