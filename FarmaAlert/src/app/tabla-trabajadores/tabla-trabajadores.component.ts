import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { AddTrabajadorModalComponent } from '../agregar-trabajador-modal/agregar-trabajador-modal.component';
import { EditTrabajadorModalComponent } from '../modificar-trabajador-modal/modificar-trabajador-modal.component';
import { DeleteTrabajadorModalComponent } from '../eliminar-trabajador-modal/eliminar-trabajador-modal.component';

@Component({
  selector: 'app-tabla-trabajadores',
  imports: [NavbarComponent, CommonModule],
  templateUrl: './tabla-trabajadores.component.html',
  styleUrl: './tabla-trabajadores.component.css',
})
export class SomeComponent {
  constructor(public dialog: MatDialog) {}

  openAddPatientModal() {
    const dialogRef = this.dialog.open(AddTrabajadorModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Trabajador agregado:', result);
      }
    });
export class SomeComponent {
  constructor(public dialog: MatDialog) {}
    
  openEditPatientModal(patient: any) {
    const dialogRef = this.dialog.open(EditTrabajadorModalComponent, {
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
      const dialogRef = this.dialog.open(DeleteTrabajadorModalComponent, {
      data: patient
       });
        
            dialogRef.afterClosed().subscribe(result => {
              if (result) {
                console.log('Paciente eliminado:', patient);
              }
            });
export class TablaTrabajadoresComponent {
  // Lista de trabajadores
  trabajadores = [
    { id: 1, nombre: 'Carlos Pérez', edad: 34, paciente: 'María Teresa' },
    { id: 2, nombre: 'Luisa Gómez', edad: 28, paciente: 'José Fernández' },
    { id: 3, nombre: 'Pedro Ramírez', edad: 40, paciente: 'Ana López' },
    { id: 4, nombre: 'Sofía Martínez', edad: 32, paciente: 'Roberto Díaz' },
  ];
  agregar() {
    alert('Agregar trabajador');
  }

  // Función para editar un trabajador
  editar(trabajador: any) {
    alert(`Editar trabajador: ${trabajador.nombre}`);
  }

  // Función para eliminar un trabajador
  eliminar(id: number) {
    if (confirm('¿Estás seguro de eliminar este trabajador?')) {
      this.trabajadores = this.trabajadores.filter((t) => t.id !== id);
    }
  }
}
