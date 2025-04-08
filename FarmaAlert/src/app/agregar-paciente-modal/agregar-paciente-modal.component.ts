import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input'

@Component({
  selector: 'app-agregar-paciente-modal',
  standalone: true, // 👈 Esto es clave
  templateUrl: './agregar-paciente-modal.component.html',
  styleUrls: ['./agregar-paciente-modal.component.css'],
  imports: [
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
// agregar-paciente-modal.component.ts
export class AddPatientModalComponent {
  patient = {
    NombrePaciente: '',
    HabitacionPaciente: '',
    InformacionMedica: '',
    FechaNacimiento: new Date(),
    EstadoPaciente: '', // Puedes ajustarlo según lógica de negocio
    idPastillero: '',
    FechaIngreso: new Date(),
    InformacionPaciente: '',
  };

  constructor(
    public dialogRef: MatDialogRef<AddPatientModalComponent>
  ){}

  onSubmit() {
    console.log('Paciente a enviar al backend:', this.patient);
    this.dialogRef.close(this.patient); // Retornamos el objeto completo
  }

  onCancel(): void {
    this.dialogRef.close(); // No retorna nada
  }
}
