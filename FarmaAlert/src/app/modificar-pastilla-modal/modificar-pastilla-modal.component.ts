import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modificar-pastilla-modal',
  templateUrl: './modificar-pastilla-modal.component.html',
  standalone: true,
  imports: [
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    CommonModule,
  ],
  styleUrls: ['./modificar-pastilla-modal.component.css'],
})
export class EditPastillaModalComponent {
  constructor(
    public dialogRef: MatDialogRef<EditPastillaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Asegurarse de que la fecha sea un objeto Date
    if (this.data.fechacadu && !(this.data.fechacadu instanceof Date)) {
      this.data.fechacadu = new Date(this.data.fechacadu);
    }
  }

  onSubmit() {
    if (this.data.medicamento && this.data.fechacadu && this.data.stock) {
      this.dialogRef.close(this.data);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
