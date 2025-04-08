import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-agregar-pastilla-modal',
  templateUrl: './agregar-pastilla-modal.component.html',
  styleUrls: ['./agregar-pastilla-modal.component.css'],
  standalone: true,
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
export class AddPastillaModalComponent {
  pastilla = {
    nombreMedicamento: '',
    fechaCaducidad: new Date(),
    informacionAdicional: '',
    cantidad: 0,
    descripcionMedicamento: '',
  };

  constructor(public dialogRef: MatDialogRef<AddPastillaModalComponent>) {}

  onSubmit() {
    if (
      this.pastilla.nombreMedicamento &&
      this.pastilla.fechaCaducidad &&
      this.pastilla.cantidad &&
      this.pastilla.descripcionMedicamento &&
      this.pastilla.informacionAdicional 
    ) {
      console.log(this.pastilla);
      this.dialogRef.close(this.pastilla);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
