from django.contrib import admin
from .models import Prospecto, Fidelizacion, FidelizacionPorProspecto

admin.site.register(Prospecto)
admin.site.register(Fidelizacion)
admin.site.register(FidelizacionPorProspecto)
