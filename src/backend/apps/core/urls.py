from django.urls import path
from apps.core import views

urlpatterns = [
    path('', views.index, name='index'),
    path('prospectos/', views.ProspectoListView.as_view(), name='prospecto_list'),
    path('prospectos/new/', views.ProspectoCreateView.as_view(), name='prospecto_create'),
    path('prospectos/<int:pk>/edit/', views.ProspectoUpdateView.as_view(), name='prospecto_update'),
    path('prospectos/<int:pk>/delete/', views.ProspectoDeleteView.as_view(), name='prospecto_delete'),
    path('fidelizaciones/', views.FidelizacionListView.as_view(), name='fidelizacion_list'),
    path('fidelizaciones/new/', views.FidelizacionCreateView.as_view(), name='fidelizacion_create'),
    path('fidelizaciones/<int:pk>/edit/', views.FidelizacionUpdateView.as_view(), name='fidelizacion_update'),
    path('fidelizaciones/<int:pk>/delete/', views.FidelizacionDeleteView.as_view(), name='fidelizacion_delete'),
    path('fidelizaciones-por-prospecto/', views.FidelizacionPorProspectoListView.as_view(), name='fidelizacion_por_prospecto_list'),
    path('fidelizaciones-por-prospecto/new/', views.FidelizacionPorProspectoCreateView.as_view(), name='fidelizacion_por_prospecto_create'),
    path('fidelizaciones-por-prospecto/<int:pk>/edit/', views.FidelizacionPorProspectoUpdateView.as_view(), name='fidelizacion_por_prospecto_update'),
    path('fidelizaciones-por-prospecto/<int:pk>/delete/', views.FidelizacionPorProspectoDeleteView.as_view(), name='fidelizacion_por_prospecto_delete'),
]
