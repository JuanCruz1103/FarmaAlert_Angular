import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { AddTrabajadorModalComponent } from '../agregar-trabajador-modal/agregar-trabajador-modal.component';
import { EditTrabajadorModalComponent } from '../modificar-trabajador-modal/modificar-trabajador-modal.component';
import { DeleteTrabajadorModalComponent } from '../eliminar-trabajador-modal/eliminar-trabajador-modal.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-tabla-trabajadores',
  imports: [NavbarComponent, CommonModule],
  templateUrl: './tabla-trabajadores.component.html',
  styleUrl: './tabla-trabajadores.component.css',
})

export class TablaTrabajadoresComponent {
  // Lista de trabajadores
  trabajadores = [
    { id: 1, nombre: 'Carlos Pérez', edad: 34, paciente: 'María Teresa' },
    { id: 2, nombre: 'Luisa Gómez', edad: 28, paciente: 'José Fernández' },
    { id: 3, nombre: 'Pedro Ramírez', edad: 40, paciente: 'Ana López' },
    { id: 4, nombre: 'Sofía Martínez', edad: 32, paciente: 'Roberto Díaz' },
  ];
  dialog: any;
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

  openAddTrabajadorModal() {
    const dialogRef = this.dialog.open(AddTrabajadorModalComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log('Trabajador agregado:', result);
      }
    });
  }
        
  openDeleteTrabajadorModal(trabajador: any) {
      const dialogRef = this.dialog.open(DeleteTrabajadorModalComponent, {
      data: trabajador
       });
        
            dialogRef.afterClosed().subscribe((result: any) => {
              if (result) {
                console.log('Trabajador eliminado:', trabajador);
              }
            });
    }
  openEditTrabajadorModal(trabajador: any) {
    const dialogRef = this.dialog.open(EditTrabajadorModalComponent, {
      data: trabajador
          });
        dialogRef.afterClosed().subscribe((result: any) => {
          if (result) {
              console.log('Trabajador modificado:', result);
            }
          });
  }
}