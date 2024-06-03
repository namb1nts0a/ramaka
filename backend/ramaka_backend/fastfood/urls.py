from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import OverpassAPI

router = DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    path('overpass/', OverpassAPI.as_view(), name="overpass")
    
]
