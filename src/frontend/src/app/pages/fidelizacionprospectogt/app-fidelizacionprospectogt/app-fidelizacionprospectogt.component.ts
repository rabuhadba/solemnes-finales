import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-fidelizacionprospectogt',
  templateUrl: './app-fidelizacionprospectogt.component.html',
  styleUrls: ['./app-fidelizacionprospectogt.component.scss']
})
export class AppFidelizacionprospectogtComponent {

  person: any;
  avatarLink: string;
  name_id: string;
  people: any[];
  showData: boolean;
  peopleFormGroup = new FormGroup({
    personControl: new FormControl('', [Validators.required]),
  });

  constructor() {
    this.person = {};
    this.name_id = "";
    this.people = [];
    this.getPeople();
    this.showData = false;
    this.avatarLink = "";
  }

  async getPeople() {
    // Simulate an API call
    const result = await fetch('http://localhost:8000/api/core/get/list/Persona/');
    const response = (await result.json()) as any[];
    this.people = response;
    console.log(this.people);
  }

  async getPerson() {
    const person_id = this.peopleFormGroup.controls.personControl.value;
    const result = await fetch(`http://localhost:8000/api/core/get/Persona/${person_id}/`);
    const c = await result.json();
    this.person = c;
    if (Object.keys(this.person).length) {
      this.showData = true;
      this.avatarLink = this.person.avatar;
    }
  }
}
