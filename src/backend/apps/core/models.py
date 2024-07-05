from django.db import models

class Prospecto(models.Model):
    idnombre = models.CharField(max_length=100)
    idusuario = models.CharField(max_length=100)
    email = models.EmailField()
    telefono = models.CharField(max_length=20)
    direccion = models.CharField(max_length=200)

    def __str__(self):
        return self.idnombre

class Fidelizacion(models.Model):
    idplan = models.CharField(max_length=100)
    descripcion = models.TextField()
    beneficios = models.TextField()

    def __str__(self):
        return self.idplan

class FidelizacionPorProspecto(models.Model):
    prospecto = models.ForeignKey(Prospecto, on_delete=models.CASCADE)
    fidelizacion = models.ForeignKey(Fidelizacion, on_delete=models.CASCADE)
    fecha_asociacion_inicio = models.DateField()
    fecha_asociacion_final = models.DateField()
    estado = models.CharField(max_length=50)
    canal_contacto = models.CharField(max_length=100)
    notas = models.TextField()
    valor_campana = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.prospecto} - {self.fidelizacion}"
