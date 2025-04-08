import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select'; // Importa MatSelectModule

@Component({
  selector: 'app-agregar-trabajador-modal',
  standalone: true,
  templateUrl: './agregar-trabajador-modal.component.html',
  imports: [
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule, // Agrega MatSelectModule aquí
  ],
  styleUrls: ['./agregar-trabajador-modal.component.css'],
})
export class AddTrabajadorModalComponent {
  trabajador = {
    nombre: '',
    email: '', // Cambia email a edad
    fechaCreacionUsuario: Date.now(),
    Rol: 'Trabajador',
    Contrasena: '', // Cambia contraseña a rol
  };

  constructor(public dialogRef: MatDialogRef<AddTrabajadorModalComponent>) {}

  onSubmit() {
    if (
      this.trabajador.nombre &&
      this.trabajador.email && // Asegúrate de validar la edad
      this.trabajador.Rol &&
      this.trabajador.fechaCreacionUsuario
    ) {
      this.dialogRef.close(this.trabajador);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
