import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Trabajador } from '../Services/trabajadores.service';

@Component({
  selector: 'app-modificar-trabajador-modal',
  standalone: true,
  templateUrl: './modificar-trabajador-modal.component.html',
  imports: [
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  styleUrls: ['./modificar-trabajador-modal.component.css'],
})
export class EditTrabajadorModalComponent {
  constructor(
    public dialogRef: MatDialogRef<EditTrabajadorModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Trabajador
  ) {}

  onSubmit() {
    if (this.data.email && this.data.nombre) {
      this.dialogRef.close(this.data);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
