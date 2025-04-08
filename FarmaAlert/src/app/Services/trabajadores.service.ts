import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Trabajador {
  idUsuario: string;
  nombre: string;
  email: string;
  fechaCreacionUsuario: Date;
  Rol: string;
  Contrasena: string;
}

@Injectable({
  providedIn: 'root',
})
export class TrabajadoresService {
  private apiUrl = 'http://localhost:44398/api/Usuario';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  // Get all trabajadores
  getTrabajadores(): Observable<Trabajador[]> {
    return this.http.get<Trabajador[]>(this.apiUrl, this.httpOptions);
  }

  // Get trabajador by id
  getTrabajadorById(id: number): Observable<Trabajador> {
    return this.http.get<Trabajador>(`${this.apiUrl}/${id}`, this.httpOptions);
  }

  // Create new trabajador
  createTrabajador(trabajador: Trabajador): Observable<Trabajador> {
    return this.http.post<Trabajador>(
      this.apiUrl,
      trabajador,
      this.httpOptions
    );
  }

  // Update trabajador
  updateTrabajador(trabajador: Trabajador): Observable<Trabajador> {
    return this.http.put<Trabajador>(
      `${this.apiUrl}/${trabajador.idUsuario}`,
      trabajador,
      this.httpOptions
    );
  }

  // Delete trabajador
  deleteTrabajador(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, this.httpOptions);
  }
}
