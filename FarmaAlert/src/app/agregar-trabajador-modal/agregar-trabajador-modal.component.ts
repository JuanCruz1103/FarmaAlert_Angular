import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-trabajador-modal',
  templateUrl: './agregar-trabajador-modal.component.html',
  styleUrls: ['./agregar-trabajador-modal.component.css']
})
export class AddTrabajadorModalComponent {
  trabajador = {
    nombre: '',
    edad:'',
    pacientes:''
  };

  constructor(public dialogRef: MatDialogRef<AddTrabajadorModalComponent>) {}

  onSubmit() {
    console.log(this.trabajador);
    this.dialogRef.close(this.trabajador);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}