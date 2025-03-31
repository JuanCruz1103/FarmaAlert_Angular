import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-paciente-modal',
  templateUrl: './agregar-paciente-modal.component.html',
  styleUrls: ['./agregar-paciente-modal.component.css']
})
export class AddPatientModalComponent {
  patient = {
    nombre: '',
    habitacion:'',
    medicamentos:'',
    detalles:''
  };

  constructor(public dialogRef: MatDialogRef<AddPatientModalComponent>) {}

  onSubmit() {
    console.log(this.patient);
    this.dialogRef.close(this.patient);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
