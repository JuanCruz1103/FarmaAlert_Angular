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
  selector: 'app-recuperar-contra',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, ReactiveFormsModule],
  templateUrl: './recuperar-contra.component.html',
  styleUrls: ['./recuperar-contra.component.css'],
})
export class RecuperarContraComponent implements OnInit {
  recuperarForm!: FormGroup;
  isLoading: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.recuperarForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.recuperarForm.invalid) {
      this.recuperarForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const email = this.recuperarForm.get('email')?.value;

    this.authService.forgotPassword(email).subscribe({
      next: () => {
        this.successMessage =
          'Se ha enviado un código de recuperación a tu correo electrónico.';
        // Redirigir al componente de verificación de código después de 2 segundos
        setTimeout(() => {
          this.router.navigate(['/recuperar-contrasena']);
        }, 2000);
      },
      error: (error) => {
        this.isLoading = false;
        if (error.status === 404) {
          this.errorMessage =
            'No se encontró ninguna cuenta con este correo electrónico.';
        } else {
          this.errorMessage = 'Error al enviar el correo. Inténtalo de nuevo.';
        }
        console.error('Error al recuperar contraseña:', error);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
