import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Login {
  email: string;
  contrasena: string;
}

export interface Register {
  nombre: string;
  email: string;
  rol: string;
  contrasena: string;
}

export interface ForgotPassword {
  email: string;
}

export interface ResetPassword {
  token: string;
  nuevaContrasena: string;
}

export interface ValidateToken {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:44398/api/auth';

  // Opciones de encabezado HTTP para asegurar que se envíen los datos correctamente
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  // Método para iniciar sesión
  login(loginData: Login): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/login`,
      loginData,
      this.httpOptions
    );
  }

  // Método para registrar un nuevo usuario
  register(registerData: Register): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/register`,
      registerData,
      this.httpOptions
    );
  }

  // Método para solicitar recuperación de contraseña
  forgotPassword(email: string): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/forgot-password`,
      JSON.stringify(email),
      this.httpOptions
    );
  }

  // Método para validar un token de recuperación
  validateToken(token: ValidateToken): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/validate-token`,
      token,
      this.httpOptions
    );
  }

  // Método para restablecer la contraseña
  resetPassword(resetData: ResetPassword): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/reset-password`,
      resetData,
      this.httpOptions
    );
  }

  // Método para cerrar sesión
  logout(userId: string): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/logout`,
      JSON.stringify(userId),
      this.httpOptions
    );
  }

  // Guardar token en localStorage
  saveToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  // Obtener token desde localStorage
  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  // Eliminar token del localStorage
  removeToken(): void {
    localStorage.removeItem('auth_token');
  }

  // Verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }
}
