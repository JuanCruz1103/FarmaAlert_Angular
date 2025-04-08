import { Component, NgModule, OnInit } from '@angular/core';
import { PacientesService, Paciente } from '../Services/pacientes.service';
import { MatDialog } from '@angular/material/dialog';
import { AddPatientModalComponent } from '../agregar-paciente-modal/agregar-paciente-modal.component';
import { EditPatientModalComponent } from '../modificar-paciente-modal/modificar-paciente-modal.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule, NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog'; 

@Component({
  selector: 'app-tabla-pasientes',
  standalone: true,
  imports: [NavbarComponent, CommonModule, MatDialogModule, MatButtonModule, NgFor],
  templateUrl: './tabla-pasientes.component.html',
  styleUrl: './tabla-pasientes.component.css',
})
export class TablaPasientesComponent implements OnInit {
  pacientes: Paciente[] = [];

  constructor(
    private pacientesService: PacientesService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.obtenerPacientes();
  }

  obtenerPacientes() {
    this.pacientesService.getPacientes().subscribe({
      next: (data) => {
        this.pacientes = data;
        console.log('Pacientes cargados:', this.pacientes);
      },
      error: (error) => {
        console.error('Error al obtener pacientes:', error);
        alert('Error al cargar pacientes: ' + error.message);
      },
    });
  }

  agregar() {
  const dialogRef = this.dialog.open(AddPatientModalComponent);
  
  dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      // Validación más completa
      if (!result.NombrePaciente || !result.HabitacionPaciente) {
        alert('Nombre y habitación son obligatorios');
        return;
      }

      // Asegurar que las fechas sean válidas
      if (result.FechaIngreso && !(result.FechaIngreso instanceof Date)) {
        result.FechaIngreso = new Date(result.FechaIngreso);
      }

      this.pacientesService.agregarPaciente(result).subscribe({
        next: (nuevoPaciente) => {
          this.pacientes.push(nuevoPaciente);
          this.pacientes = [...this.pacientes]; // Cambio de referencia para detección de cambios
        },
        error: (error) => {
          console.error('Error:', error);
          alert('Error: ' + error.message);
        }
      });
    }
  });
}

  editar(paciente: any) {
    // Verifica que el paciente tenga un ID válido
    if (!paciente || !paciente.IdPaciente) {
      console.error('Paciente inválido o sin ID:', paciente);
      alert('No se puede editar un paciente sin ID');
      return;
    }

    const dialogRef = this.dialog.open(EditPatientModalComponent, {
      data: { ...paciente }, // Usa una copia para evitar modificaciones directas
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Asegúrate de que el ID sigue presente en el resultado
        if (!result.id) {
          console.error('El ID se perdió durante la edición');
          result.id = paciente.IdPaciente;
        }

        this.pacientesService.editarPaciente(result).subscribe({
          next: (pacienteEditado) => {
            console.log('Paciente editado:', pacienteEditado);
            const index = this.pacientes.findIndex(
              (p) => p.IdPaciente === pacienteEditado.IdPaciente
            );
            if (index !== -1) {
              this.pacientes[index] = pacienteEditado;
            }
            alert('Paciente actualizado correctamente');
          },
          error: (error) => {
            console.error('Error al editar paciente:', error);
            alert('Error al actualizar paciente: ' + error.message);
          },
        });
      }
    });
  }

  eliminar(id: string) {
    // Make sure id is a string and not undefined/null
    console.log('Intentando eliminar paciente con ID:', id);
    if (!id) {
      console.error('ID inválido para eliminar:', id);
      alert('No se puede eliminar un paciente sin ID');
      return;
    }


    if (confirm(`¿Estás seguro de eliminar este paciente con ID ${id}?`)) {
      this.pacientesService.eliminarPaciente(id).subscribe({
        next: () => {
          console.log('Paciente eliminado con ID:', id);
          this.pacientes = this.pacientes.filter((p) => p.IdPaciente !== id);
          alert('Paciente eliminado correctamente');
        },
        error: (error) => {
          console.error('Error al eliminar paciente:', error);
          alert('Error al eliminar paciente: ' + error.message);
        },
      });
    }
  }
}
