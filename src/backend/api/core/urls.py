from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.core import apiviews

router = DefaultRouter()
router.register(r'prospectos', apiviews.ProspectoViewSet)
router.register(r'fidelizaciones', apiviews.FidelizacionViewSet)
router.register(r'fidelizaciones-por-prospecto', apiviews.FidelizacionPorProspectoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
