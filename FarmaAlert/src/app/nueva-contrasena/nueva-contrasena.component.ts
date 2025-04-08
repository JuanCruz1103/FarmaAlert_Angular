import { Component } from '@angular/core';

@Component({
  selector: 'app-nueva-contrasena',
  imports: [],
  templateUrl: './nueva-contrasena.component.html',
  styleUrl: './nueva-contrasena.component.css'
})
export class NuevaContrasenaComponent {
  newPassword: string = '';
  confirmPassword: string = '';
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  confirm() {
    if (this.newPassword === this.confirmPassword && this.newPassword.length > 0) {
      alert('Contraseña cambiada correctamente');
    } else {
      alert('Las contraseñas no coinciden o están vacías');
    }
  }
}
