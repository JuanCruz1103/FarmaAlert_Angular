import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registroForm!: FormGroup;
  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.registroForm = this.fb.group(
      {
        nombre: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        contrasena: ['', [Validators.required, Validators.minLength(6)]],
        confirmarContrasena: ['', Validators.required],
        rol: ['Trabajador'], // Valor por defecto para el rol
      },
      { validators: this.passwordsMatch }
    );
  }

  passwordsMatch(group: FormGroup) {
    const password = group.get('contrasena')?.value;
    const confirmPassword = group.get('confirmarContrasena')?.value;
    return password === confirmPassword ? null : { noCoinciden: true };
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  toggleConfirmPasswordVisibility(): void {
    this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }

  onSubmit(): void {
    if (this.registroForm.invalid) {
      this.registroForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const registerData = {
      nombre: this.registroForm.get('nombre')?.value,
      email: this.registroForm.get('email')?.value,
      rol: this.registroForm.get('rol')?.value,
      contrasena: this.registroForm.get('contrasena')?.value,
    };

    this.authService.register(registerData).subscribe({
      next: () => {
        // Navegación al login después de registro exitoso
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.isLoading = false;
        if (error.status === 400) {
            // Navegación al login después de registro exitoso
            this.router.navigate(['/login']);
            (this.errorMessage =
              'Error en el registro. Verifique los datos ingresados.');
        } else if (
          error.error?.message?.includes('correo ya está registrado')
        ) {
          this.errorMessage = 'El correo electrónico ya está registrado.';
        } else {
          this.errorMessage = 'Error al registrar. Inténtalo de nuevo.';
        }
        console.error('Error de registro:', error);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
