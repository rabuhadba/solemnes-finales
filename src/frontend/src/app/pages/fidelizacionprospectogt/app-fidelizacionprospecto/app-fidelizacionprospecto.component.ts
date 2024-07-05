import { Component } from "@angular/core";
import Swal from "sweetalert2";

@Component({
  selector: "app-app-fidelizacionprospecto",
  templateUrl: "./app-fidelizacionprospecto.component.html",
  styleUrls: ["./app-fidelizacionprospecto.component.scss"],
})
export class AppFidelizacionprospectoComponent {
  displayedColumns = [
    "id",
    "nombre",
    "f_nacimiento",
    "ciudad",
    "avatar",
    "edit",
  ];
  dataSource: any[];

  constructor() {
    this.dataSource = [];
    this.getPeople();
  }

  async getPeople() {
    // Datos mock para desarrollo
    const mockData = [
      { id: 'Juan', nombre: 'Codigo de descuento por compartir app con amigos', f_nacimiento: '24/11/2016', ciudad: '24/11/2020', avatar: 'telefono' },
      { id: 'Ana', nombre: 'Oferta de primera compra / comprador frecuente', f_nacimiento: '06/12/2023', ciudad: '06/12/2028', avatar: 'Correo' },
    ];

    this.dataSource = mockData;

    // Comentado para evitar llamada real al backend
    // const result = await fetch(
    //   "http://localhost:8000/api/core/get/list/Persona/"
    // );
    // const response = (await result.json()) as any[];
    // this.dataSource = response;
  }

  async addPerson() {
    type AddPersonForm = {
      nombre: string;
      ciudad: string;
      f_nacimiento: Date;
    };

    let nombreInput: HTMLInputElement;
    let ciudadInput: HTMLInputElement;
    let f_nacimientoInput: HTMLInputElement;

    Swal.fire({
      title: "Agregar persona",
      html: `
    <input type="text" id="nombre" class="swal2-input" placeholder="Nombre completo">
    <input type="text" id="ciudad" class="swal2-input" placeholder="Ciudad">
    <input type="date" id="f_nacimiento" style="width:65%;" class="swal2-input" placeholder="Fecha de nacimiento">
  
    `,
      confirmButtonText: "Agregar",
      focusConfirm: false,
      didOpen: () => {
        const popup = Swal.getPopup()!;
        nombreInput = popup.querySelector("#nombre") as HTMLInputElement;
        ciudadInput = popup.querySelector("#ciudad") as HTMLInputElement;
        f_nacimientoInput = popup.querySelector("#f_nacimiento") as HTMLInputElement;
        nombreInput.onkeyup = (event) =>
          event.key === "Enter" && Swal.clickConfirm();
        ciudadInput.onkeyup = (event) =>
          event.key === "Enter" && Swal.clickConfirm();
        f_nacimientoInput.onkeyup = (event) =>
          event.key === "Enter" && Swal.clickConfirm();
      },
      preConfirm: () => {
        const nombre = nombreInput.value;
        const ciudad = ciudadInput.value;
        const f_nacimiento_str = f_nacimientoInput.value;

        if (!nombre || !ciudad || !f_nacimiento_str) {
          Swal.showValidationMessage('Por favor completa todos los campos');
          return;
        }

        const f_nacimiento = new Date(f_nacimiento_str);

        return { nombre, ciudad, f_nacimiento };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // Procesa el formulario
        const formData: AddPersonForm = result.value as AddPersonForm;
        console.log('Form data:', formData);
        // Aquí puedes añadir la lógica para añadir la nueva persona a la lista
        this.dataSource.push({ id: this.dataSource.length + 1, ...formData, avatar: '' });
      }
    });
  }

  deletePerson(element: any) {
    // Aquí puedes definir qué hacer cuando se elimina una persona
    console.log('Persona eliminada:', element);
    // Puedes añadir la lógica necesaria para eliminar la persona de la lista
    this.dataSource = this.dataSource.filter(persona => persona.id !== element.id);
  }
}
