import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPastillaModalComponent } from '../agregar-pastilla-modal/agrgar-pastilla-modal.component';
import { CommonModule } from '@angular/common';
import { EditPastillaModalComponent } from '../modificar-pastilla-modal/modificar-pastilla-modal.component';
import { DeletePastillaModalComponent } from '../eliminar-pastilla-modal/eliminar-pastilla-modal.component';
import { NavbarComponent } from 'app/navbar/navbar.component';
import { PastillasService, Pastilla } from '../Services/pastillas.service';

@Component({
  selector: 'app-tabla-pastillas',
  imports: [
    CommonModule,
    NavbarComponent,
    AddPastillaModalComponent,
    EditPastillaModalComponent,
    DeletePastillaModalComponent,
  ],
  standalone: true,
  templateUrl: './tabla-pastillas.component.html',
  styleUrl: './tabla-pastillas.component.css',
})
export class TablaPastillasComponent implements OnInit {
  pastillas: Pastilla[] = [];
  isLoading = false;
  error: string | null = null;

  constructor(
    public dialog: MatDialog,
    private pastillasService: PastillasService
  ) {}

  ngOnInit(): void {
    this.cargarPastillas();
  }

  cargarPastillas(): void {
    this.isLoading = true;
    this.error = null;

    this.pastillasService.getPastillas().subscribe({
      next: (data) => {
        this.pastillas = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al cargar medicamentos:', err);
        this.error = 'Error al cargar la lista de medicamentos';
        this.isLoading = false;
      },
    });
  }

  agregar() {
    const dialogRef = this.dialog.open(AddPastillaModalComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.isLoading = true;

        // Convertir los datos del formulario al formato de la API
        const nuevaPastilla: Pastilla = {
          idMedicamento: '', // Se generará en el backend
          nombreMedicamento: result.nombreMedicamento,
          cantidad: parseInt(result.cantidad),
          descripcionMedicamento: result.descripcionMedicamento, // Valor por defecto o se puede agregar al formulario
          fechaCaducidad: new Date(result.fechaCaducidad),
          informacionAdicional: result.informacionAdicional, // Valor por defecto o se puede agregar al formulario
        };

        this.pastillasService.createPastilla(nuevaPastilla).subscribe({
          next: (response) => {
            console.log('Medicamento agregado:', response);
            this.cargarPastillas(); // Recargar la lista
          },
          error: (err) => {
            console.error('Error al agregar medicamento:', err);
            this.error = 'Error al agregar el medicamento';
            this.isLoading = false;
          },
        });
      }
    });
  }

  editar(pastilla: any) {
    // Preparar los datos para el diálogo (formato UI)
    const pastillaParaDialog = {
      id: pastilla.idMedicamento,
      medicamento: pastilla.nombreMedicamento,
      fechacadu: pastilla.fechaCaducidad,
      stock: pastilla.cantidad,
    };

    const dialogRef = this.dialog.open(EditPastillaModalComponent, {
      data: pastillaParaDialog,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.isLoading = true;

        // Convertir los datos del formulario al formato de la API
        const pastillaActualizada: Pastilla = {
          idMedicamento: result.id,
          nombreMedicamento: result.medicamento,
          cantidad: parseInt(result.stock),
          descripcionMedicamento: pastilla.descripcionMedicamento, // Mantener el valor original
          fechaCaducidad: new Date(result.fechacadu),
          informacionAdicional: pastilla.informacionAdicional, // Mantener el valor original
        };

        this.pastillasService.updatePastilla(pastillaActualizada).subscribe({
          next: (response) => {
            console.log('Medicamento actualizado:', response);
            this.cargarPastillas(); // Recargar la lista
          },
          error: (err) => {
            console.error('Error al actualizar medicamento:', err);
            this.error = 'Error al actualizar el medicamento';
            this.isLoading = false;
          },
        });
      }
    });
  }

  eliminar(id: string) {
    const pastilla = this.pastillas.find((p) => p.idMedicamento === id);

    if (pastilla) {
      // Preparar los datos para el diálogo (formato UI)
      const pastillaParaDialog = {
        id: pastilla.idMedicamento,
        nombre: pastilla.nombreMedicamento,
        fechaCaducidad: pastilla.fechaCaducidad,
        stock: pastilla.cantidad,
      };

      const dialogRef = this.dialog.open(DeletePastillaModalComponent, {
        data: pastillaParaDialog,
      });

      dialogRef.afterClosed().subscribe((confirm: boolean) => {
        if (confirm) {
          this.isLoading = true;

          this.pastillasService.deletePastilla(id).subscribe({
            next: () => {
              console.log('Medicamento eliminado con ID:', id);
              this.cargarPastillas(); // Recargar la lista
            },
            error: (err) => {
              console.error('Error al eliminar medicamento:', err);
              this.error = 'Error al eliminar el medicamento';
              this.isLoading = false;
            },
          });
        }
      });
    }
  }
}
