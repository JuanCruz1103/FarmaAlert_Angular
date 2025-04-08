import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { NavbarComponent } from '../navbar/navbar.component';
import { AddTrabajadorModalComponent } from '../agregar-trabajador-modal/agregar-trabajador-modal.component';
import { EditTrabajadorModalComponent } from '../modificar-trabajador-modal/modificar-trabajador-modal.component';
import { DeleteTrabajadorModalComponent } from '../eliminar-trabajador-modal/eliminar-trabajador-modal.component';
import {
  TrabajadoresService,
  Trabajador,
} from '../Services/trabajadores.service';

@Component({
  selector: 'app-tabla-trabajadores',
  standalone: true,
  templateUrl: './tabla-trabajadores.component.html',
  styleUrl: './tabla-trabajadores.component.css',
  imports: [
    CommonModule,
    NavbarComponent,
    AddTrabajadorModalComponent,
    EditTrabajadorModalComponent,
    DeleteTrabajadorModalComponent,
  ],
})
export class TablaTrabajadoresComponent implements OnInit {
  trabajadores: Trabajador[] = [];
  isLoading = false;
  error: string | null = null;

  constructor(
    private dialog: MatDialog,
    private trabajadoresService: TrabajadoresService
  ) {}

  ngOnInit(): void {
    this.cargarTrabajadores();
  }

  cargarTrabajadores(): void {
    this.isLoading = true;
    this.error = null;

    this.trabajadoresService.getTrabajadores().subscribe({
      next: (data) => {
        this.trabajadores = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al cargar trabajadores:', err);
        this.error = 'Error al cargar la lista de trabajadores';
        this.isLoading = false;
      },
    });
  }

  agregar() {
    const dialogRef = this.dialog.open(AddTrabajadorModalComponent);

    dialogRef.afterClosed().subscribe((nuevoTrabajador: any) => {
      if (nuevoTrabajador) {
        this.isLoading = true;

        const trabajador: Trabajador = {
          nombre: nuevoTrabajador.nombre,
          fechaCreacionUsuario: new Date(),
          email: nuevoTrabajador.email,
          idUsuario: '',
          Rol: nuevoTrabajador.Rol="Trabajador",
          Contrasena: nuevoTrabajador.Contrasena,
        };

        this.trabajadoresService.createTrabajador(trabajador).subscribe({
          next: (result) => {
            console.log('Trabajador agregado:', result);
            this.cargarTrabajadores(); // Recargar la lista
          }
        });
      }
    });
  }

  editar(trabajador: Trabajador) {
    const dialogRef = this.dialog.open(EditTrabajadorModalComponent, {
      data: { ...trabajador }, // Send a copy to avoid direct mutation
    });

    dialogRef.afterClosed().subscribe((result: Trabajador) => {
      if (result) {
        this.isLoading = true;

        this.trabajadoresService.updateTrabajador(result).subscribe({
          next: (updated) => {
            console.log('Trabajador modificado:', updated);
            this.cargarTrabajadores(); // Recargar la lista
          },
          error: (err) => {
            console.error('Error al modificar trabajador:', err);
            this.error = 'Error al modificar el trabajador';
            this.isLoading = false;
          },
        });
      }
    });
  }

  eliminar(id: string) {
    const trabajador = this.trabajadores.find((t) => t.idUsuario === id);
    const dialogRef = this.dialog.open(DeleteTrabajadorModalComponent, {
      data: trabajador,
    });

    dialogRef.afterClosed().subscribe((confirmado: boolean) => {
      if (confirmado) {
        this.isLoading = true;

        this.trabajadoresService.deleteTrabajador(id).subscribe({
          next: () => {
            console.log('Trabajador eliminado con ID:', id);
            this.cargarTrabajadores(); // Recargar la lista
          },
          error: (err) => {
            console.error('Error al eliminar trabajador:', err);
            this.error = 'Error al eliminar el trabajador';
            this.isLoading = false;
          },
        });
      }
    });
  }
}
