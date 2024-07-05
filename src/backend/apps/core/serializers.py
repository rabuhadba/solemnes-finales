from rest_framework import serializers
from apps.core.models import Prospecto, Fidelizacion, FidelizacionPorProspecto

class ProspectoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prospecto
        fields = '__all__'

class FidelizacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fidelizacion
        fields = '__all__'

class FidelizacionPorProspectoSerializer(serializers.ModelSerializer):
    class Meta:
        model = FidelizacionPorProspecto
        fields = '__all__'
