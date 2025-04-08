import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eliminar-pastilla-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <h2
      mat-dialog-title
      style="text-align: center; font-weight: bold; color: #333;"
    >
      Eliminar Medicamento
    </h2>

    <mat-dialog-content style="text-align: center; padding: 20px;">
      <p>
        ¿Estás seguro de que deseas eliminar el medicamento
        <strong>{{ data.nombre }}</strong
        >?
      </p>
      <p>Esta acción no se puede deshacer.</p>
    </mat-dialog-content>

    <mat-dialog-actions
      align="end"
      style="justify-content: center; padding: 10px;"
    >
      <button
        mat-button
        (click)="onCancel()"
        style="margin-right: 10px; border: 1px solid #ccc; border-radius: 5px; background-color: #f5f5f5; color: #333; transition: background-color 0.3s;"
      >
        Cancelar
      </button>
      <button
        mat-button
        (click)="onDelete()"
        cdkFocusInitial
        style="border: none; border-radius: 5px; background-color: #dc3545; color: white; transition: background-color 0.3s;"
      >
        Eliminar
      </button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      .mat-dialog-content {
        max-width: 400px;
      }
    `,
  ],
})
export class DeletePastillaModalComponent {
  constructor(
    public dialogRef: MatDialogRef<DeletePastillaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onDelete(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
