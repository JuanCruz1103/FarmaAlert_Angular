import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstadisticasService {
  // Replace with your actual API base URL
  private baseUrl = 'http://localhost:44398/api';

  constructor(private http: HttpClient) {}

  // Get count of patients
  getContarPacientes(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/Paciente/Contar`);
  }

  // Get count of medications
  getContarMedicamentos(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/Medicamento/Contar`);
  }

  // Get list of workers
  getTrabajadores(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/Usuario/CantTrabajadores`);
  }
}
