import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AddPatientModalComponent } from '../agregar-paciente-modal/agregar-paciente-modal.component';
import { EditPatientModalComponent } from '../modificar-paciente-modal/modificar-paciente-modal.component';
import { DeletePatientModalComponent } from '../eliminar-paciente-modal/eliminar-paciente-modal.component';


@Component({
  selector: 'app-tabla-pasientes',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './tabla-pasientes.component.html',
  styleUrls: ['./tabla-pasientes.component.css'],
})
export class SomeComponent {
  constructor(public dialog: MatDialog) {}

  openAddPatientModal() {
    const dialogRef = this.dialog.open(AddPatientModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Paciente agregado:', result);
      }
    });
export class SomeComponent {
  constructor(public dialog: MatDialog) {}
    
  openEditPatientModal(patient: any) {
    const dialogRef = this.dialog.open(EditPatientModalComponent, {
      data: patient
        });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
            console.log('Paciente modificado:', result);
          }
        });
export class SomeComponent {
  constructor(public dialog: MatDialog) {}
        
  openDeletePatientModal(patient: any) {
      const dialogRef = this.dialog.open(DeletePatientModalComponent, {
      data: patient
       });
        
            dialogRef.afterClosed().subscribe(result => {
              if (result) {
                console.log('Paciente eliminado:', patient);
              }
            });
export class TablaPasientesComponent {
  // Datos de ejemplo
  pacientes = [
    {
      id: 1,
      pacientes: 'Juan Pérez',
      habitacion: '101',
      medicamentos: 'Aspirina, Paracetamol',
      detalles: 'Paciente con fiebre',
    },
    {
      id: 2,
      pacientes: 'Ana López',
      habitacion: '102',
      medicamentos: 'Ibuprofeno',
      detalles: 'Dolor de cabeza',
    },
  ];

  agregar() {
    alert('Agregar paciente');
    // Aquí puedes agregar lógica para agregar un paciente a la lista
    this.pacientes.push({
      id: this.pacientes.length + 1,
      pacientes: 'Nuevo Paciente',
      habitacion: '105',
      medicamentos: 'Ninguno',
      detalles: 'Sin detalles',
    });
  }

  editar(paciente: any) {
    alert(`Editar paciente: ${paciente.pacientes}`);
    // Lógica de edición
  }

  eliminar(id: number) {
    if (confirm('¿Estás seguro de eliminar este paciente?')) {
      this.pacientes = this.pacientes.filter((p) => p.id !== id);
    }
  }

  
}

