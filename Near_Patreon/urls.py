from django.urls import path,include
from Near_Patreon.views import *
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('', Home,name='home'),
    path('#profile/create/',CreateOrValidateUser,name='validate'),
    path('create/',CreateOrValidateUser,name='validate'),
    path('<str:username>/',UserPage,name='userpage'),
    path('check_username/', check_username, name='check_username'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
