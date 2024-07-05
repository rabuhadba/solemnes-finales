from django import forms
from .models import Prospecto, Fidelizacion, FidelizacionPorProspecto

class ProspectoForm(forms.ModelForm):
    class Meta:
        model = Prospecto
        fields = ['idnombre', 'idusuario', 'email', 'telefono', 'direccion']

class FidelizacionForm(forms.ModelForm):
    class Meta:
        model = Fidelizacion
        fields = ['idplan', 'descripcion', 'beneficios']

class FidelizacionPorProspectoForm(forms.ModelForm):
    class Meta:
        model = FidelizacionPorProspecto
        fields = ['prospecto', 'fidelizacion', 'fecha_asociacion_inicio', 'fecha_asociacion_final', 'estado', 'canal_contacto', 'notas', 'valor_campana']
