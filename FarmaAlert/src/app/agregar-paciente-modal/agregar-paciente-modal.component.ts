import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input'

@Component({
  selector: 'app-agregar-paciente-modal',
  templateUrl: './agregar-paciente-modal.component.html',
  imports: [
    FormsModule,        
    MatDialogModule,    
    MatFormFieldModule, 
    MatInputModule      
  ],
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
