import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { AddPastillaModalComponent } from '../agregar-pastilla-modal/agrgar-pastilla-modal.component';
import { EditPastillaModalComponent } from '../modificar-pastilla-modal/modificar-pastilla-modal.component';
import { DeletePastillaModalComponent } from '../eliminar-pastilla-modal/eliminar-pastilla-modal.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-tabla-pastillas',
  imports: [CommonModule, NavbarComponent],
  standalone: true,
  providers: [],
  templateUrl: './tabla-pastillas.component.html',
  styleUrl: './tabla-pastillas.component.css',
})



export class TablaPastillasComponent {
  pastillas = [
    { id: 1, nombre: 'Aspirina', fechaCaducidad: '2025-12-01', stock: 150 },
    { id: 2, nombre: 'Paracetamol', fechaCaducidad: '2026-05-01', stock: 200 },
    { id: 3, nombre: 'Ibuprofeno', fechaCaducidad: '2025-08-15', stock: 120 },
    { id: 4, nombre: 'Omeprazol', fechaCaducidad: '2026-03-20', stock: 80 },
    { id: 5, nombre: 'Amoxicilina', fechaCaducidad: '2026-01-10', stock: 300 },
    { id: 6, nombre: 'Loratadina', fechaCaducidad: '2025-11-20', stock: 150 },
    { id: 7, nombre: 'Metformina', fechaCaducidad: '2026-07-30', stock: 200 },
    { id: 8, nombre: 'Simvastatina', fechaCaducidad: '2025-09-25', stock: 90 },
    {
      id: 9,
      nombre: 'Ciprofloxacino',
      fechaCaducidad: '2026-02-15',
      stock: 60,
    },
    {
      id: 10,
      nombre: 'Atorvastatina',
      fechaCaducidad: '2025-06-05',
      stock: 120,
    },
  ];
  dialog: any;

  agregar() {
    alert('Agregar Pastilla');
  }

  editar(pastilla: any) {
    alert(`Editar pastilla: ${pastilla.nombre}`);
  }

  eliminar(id: number) {
    if (confirm('¿Estás seguro de eliminar esta pastilla?')) {
      this.pastillas = this.pastillas.filter((t) => t.id !== id);
    }
  }
  openAddPastillaModal() {
    const dialogRef = this.dialog.open(AddPastillaModalComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log('Pastilla agregada:', result);
      }
    });
}
openEditPastillaModal(patient: any) {
  const dialogRef = this.dialog.open(EditPastillaModalComponent, {
    data: patient
      });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
          console.log('Paciente modificado:', result);
        }
      });

}
openDeletePastillaModal(patient: any) {
  const dialogRef = this.dialog.open(DeletePastillaModalComponent, {
  data: patient
   });
    
        dialogRef.afterClosed().subscribe((result: any) => {
          if (result) {
            console.log('Paciente eliminado:', patient);
          }
        });
}
}