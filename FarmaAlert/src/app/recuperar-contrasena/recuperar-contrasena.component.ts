import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../Services/auth.service';
import { Subscription, interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-recuperar-contrasena',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, ReactiveFormsModule],
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.css'],
})
export class RecuperarContrasenaComponent implements OnInit, OnDestroy {
  codigoForm!: FormGroup;
  tiempoRestante: number = 30;
  private timerSubscription?: Subscription;
  isLoading: boolean = false;
  errorMessage: string = '';
  codigoVerificado: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.codigoForm = this.fb.group({
      codigo: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],
    });

    this.iniciarTemporizador();
  }

  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  iniciarTemporizador(): void {
    this.tiempoRestante = 30;
    this.timerSubscription = interval(1000)
      .pipe(take(31))
      .subscribe({
        next: (val) => {
          this.tiempoRestante = 30 - val;
        },
        complete: () => {
          this.tiempoRestante = 0;
        },
      });
  }

  reenviarCodigo(): void {
    // Aquí se implementaría la lógica para reenviar el código
    // Por ahora, simplemente reiniciamos el temporizador
    this.iniciarTemporizador();
  }

  cancelar(): void {
    this.router.navigate(['/login']);
  }

  confirmar(): void {
    if (this.codigoForm.invalid) {
      this.codigoForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const token = {
      token: this.codigoForm.get('codigo')?.value,
    };

    this.authService.validateToken(token).subscribe({
      next: () => {
        this.codigoVerificado = true;
        // Redirigir al componente de nueva contraseña
        this.router.navigate(['/nueva-contrasena'], {
          queryParams: { token: token.token },
        });
      },
      error: (error) => {
        this.isLoading = false;
        if (error.status === 400) {
          this.errorMessage = 'Código inválido o expirado.';
        } else {
          this.errorMessage =
            'Error al verificar el código. Inténtalo de nuevo.';
        }
        console.error('Error al verificar código:', error);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
