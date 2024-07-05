from django.shortcuts import render, get_object_or_404, redirect
from django.views import View
from .models import Prospecto, Fidelizacion, FidelizacionPorProspecto
from .forms import ProspectoForm, FidelizacionForm, FidelizacionPorProspectoForm

def index(request):
    return render(request, 'index.html')

# Prospecto Views
class ProspectoListView(View):
    def get(self, request):
        prospectos = Prospecto.objects.all()
        return render(request, 'prospecto_list.html', {'prospectos': prospectos})

class ProspectoCreateView(View):
    def get(self, request):
        form = ProspectoForm()
        return render(request, 'prospecto_form.html', {'form': form})
    
    def post(self, request):
        form = ProspectoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('prospecto_list')
        return render(request, 'prospecto_form.html', {'form': form})

class ProspectoUpdateView(View):
    def get(self, request, pk):
        prospecto = get_object_or_404(Prospecto, pk=pk)
        form = ProspectoForm(instance=prospecto)
        return render(request, 'prospecto_form.html', {'form': form})
    
    def post(self, request, pk):
        prospecto = get_object_or_404(Prospecto, pk=pk)
        form = ProspectoForm(request.POST, instance=prospecto)
        if form.is_valid():
            form.save()
            return redirect('prospecto_list')
        return render(request, 'prospecto_form.html', {'form': form})

class ProspectoDeleteView(View):
    def get(self, request, pk):
        prospecto = get_object_or_404(Prospecto, pk=pk)
        return render(request, 'prospecto_confirm_delete.html', {'prospecto': prospecto})
    
    def post(self, request, pk):
        prospecto = get_object_or_404(Prospecto, pk=pk)
        prospecto.delete()
        return redirect('prospecto_list')

# Fidelizacion Views
class FidelizacionListView(View):
    def get(self, request):
        fidelizaciones = Fidelizacion.objects.all()
        return render(request, 'fidelizacion_list.html', {'fidelizaciones': fidelizaciones})

class FidelizacionCreateView(View):
    def get(self, request):
        form = FidelizacionForm()
        return render(request, 'fidelizacion_form.html', {'form': form})
    
    def post(self, request):
        form = FidelizacionForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('fidelizacion_list')
        return render(request, 'fidelizacion_form.html', {'form': form})

class FidelizacionUpdateView(View):
    def get(self, request, pk):
        fidelizacion = get_object_or_404(Fidelizacion, pk=pk)
        form = FidelizacionForm(instance=fidelizacion)
        return render(request, 'fidelizacion_form.html', {'form': form})
    
    def post(self, request, pk):
        fidelizacion = get_object_or_404(Fidelizacion, pk=pk)
        form = FidelizacionForm(request.POST, instance=fidelizacion)
        if form.is_valid():
            form.save()
            return redirect('fidelizacion_list')
        return render(request, 'fidelizacion_form.html', {'form': form})

class FidelizacionDeleteView(View):
    def get(self, request, pk):
        fidelizacion = get_object_or_404(Fidelizacion, pk=pk)
        return render(request, 'fidelizacion_confirm_delete.html', {'fidelizacion': fidelizacion})
    
    def post(self, request, pk):
        fidelizacion = get_object_or_404(Fidelizacion, pk=pk)
        fidelizacion.delete()
        return redirect('fidelizacion_list')

# FidelizacionPorProspecto Views
class FidelizacionPorProspectoListView(View):
    def get(self, request):
        fidelizaciones_por_prospecto = FidelizacionPorProspecto.objects.all()
        return render(request, 'fidelizacion_por_prospecto_list.html', {'fidelizaciones_por_prospecto': fidelizaciones_por_prospecto})

class FidelizacionPorProspectoCreateView(View):
    def get(self, request):
        form = FidelizacionPorProspectoForm()
        return render(request, 'fidelizacion_por_prospecto_form.html', {'form': form})
    
    def post(self, request):
        form = FidelizacionPorProspectoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('fidelizacion_por_prospecto_list')
        return render(request, 'fidelizacion_por_prospecto_form.html', {'form': form})

class FidelizacionPorProspectoUpdateView(View):
    def get(self, request, pk):
        fidelizacion_por_prospecto = get_object_or_404(FidelizacionPorProspecto, pk=pk)
        form = FidelizacionPorProspectoForm(instance=fidelizacion_por_prospecto)
        return render(request, 'fidelizacion_por_prospecto_form.html', {'form': form})
    
    def post(self, request, pk):
        fidelizacion_por_prospecto = get_object_or_404(FidelizacionPorProspecto, pk=pk)
        form = FidelizacionPorProspectoForm(request.POST, instance=fidelizacion_por_prospecto)
        if form.is_valid():
            form.save()
            return redirect('fidelizacion_por_prospecto_list')
        return render(request, 'fidelizacion_por_prospecto_form.html', {'form': form})

class FidelizacionPorProspectoDeleteView(View):
    def get(self, request, pk):
        fidelizacion_por_prospecto = get_object_or_404(FidelizacionPorProspecto, pk=pk)
        return render(request, 'fidelizacion_por_prospecto_confirm_delete.html', {'fidelizacion_por_prospecto': fidelizacion_por_prospecto})
    
    def post(self, request, pk):
        fidelizacion_por_prospecto = get_object_or_404(FidelizacionPorProspecto, pk=pk)
        fidelizacion_por_prospecto.delete()
        return redirect('fidelizacion_por_prospecto_list')
