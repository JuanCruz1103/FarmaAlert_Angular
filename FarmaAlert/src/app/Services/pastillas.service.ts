import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Pastilla {
  idMedicamento: string;
  nombreMedicamento: string;
  cantidad: number;
  descripcionMedicamento: string;
  fechaCaducidad: Date;
  informacionAdicional: string;
}

@Injectable({
  providedIn: 'root',
})
export class PastillasService {
  private apiUrl = 'http://localhost:44398/api/Medicamento';

  // Opciones de encabezado HTTP para asegurar que se envíen los datos correctamente
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  // Obtener todas las pastillas
  getPastillas(): Observable<Pastilla[]> {
    return this.http.get<Pastilla[]>(this.apiUrl, this.httpOptions);
  }

  // Obtener una pastilla por su ID
  getPastillaById(id: string): Observable<Pastilla> {
    return this.http.get<Pastilla>(`${this.apiUrl}/${id}`, this.httpOptions);
  }

  // Crear una nueva pastilla
  createPastilla(pastilla: Pastilla): Observable<Pastilla> {
    return this.http.post<Pastilla>(this.apiUrl, pastilla, this.httpOptions);
  }

  // Actualizar una pastilla existente
  updatePastilla(pastilla: Pastilla): Observable<Pastilla> {
    return this.http.put<Pastilla>(
      `${this.apiUrl}/${pastilla.idMedicamento}`,
      pastilla,
      this.httpOptions
    );
  }

  // Eliminar una pastilla
  deletePastilla(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, this.httpOptions);
  }
}
