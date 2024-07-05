from rest_framework import viewsets
from apps.core.serializers import ProspectoSerializer, FidelizacionSerializer, FidelizacionPorProspectoSerializer
from apps.core.models import Prospecto, Fidelizacion, FidelizacionPorProspecto

class ProspectoViewSet(viewsets.ModelViewSet):
    queryset = Prospecto.objects.all()
    serializer_class = ProspectoSerializer

class FidelizacionViewSet(viewsets.ModelViewSet):
    queryset = Fidelizacion.objects.all()
    serializer_class = FidelizacionSerializer

class FidelizacionPorProspectoViewSet(viewsets.ModelViewSet):
    queryset = FidelizacionPorProspecto.objects.all()
    serializer_class = FidelizacionPorProspectoSerializer
