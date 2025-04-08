import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export interface Paciente {
  IdPaciente: string;
  idPastillero: string;
  NombrePaciente: string;
  FechaNacimiento: Date | string; // Cambiado a Date para manejar fechas
  HabitacionPaciente: string;
  EstadoPaciente: string;
  InformacionMedica: string;
  InformacionPaciente: string;
  FechaIngreso: Date | string; // Cambiado a Date para manejar fechas
}

@Injectable({
  providedIn: 'root',
})
export class PacientesService {
  private apiUrl = 'http://localhost:44398/api/Paciente';

  // Opciones de encabezado HTTP para asegurar que se envíen los datos correctamente
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getPacientes(): Observable<Paciente[]> {
    return this.http
      .get<Paciente[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  getPacienteById(id: string): Observable<Paciente> {
    // Asegúrate de que el ID no sea undefined o null
    if (!id) {
      console.error('ID es undefined o null');
      return throwError(() => new Error('ID del paciente es requerido'));
    }
    return this.http
      .get<Paciente>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  agregarPaciente(paciente: Paciente): Observable<Paciente> {
    // Verificar los datos del paciente antes de enviar
    const body = {
      ...paciente,
      FechaIngreso:
        paciente.FechaIngreso instanceof Date
          ? paciente.FechaIngreso.toISOString()
          : paciente.FechaIngreso,
      FechaNacimiento:
        paciente.FechaNacimiento instanceof Date
          ? paciente.FechaNacimiento.toISOString()
          : paciente.FechaNacimiento,
    };
    console.log('Datos a enviar en POST:', paciente);
    return this.http
      .post<Paciente>(`${this.apiUrl}/Crear`, paciente, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  editarPaciente(paciente: Paciente): Observable<Paciente> {
    // Verificar que el ID exista y sea válido
    if (!paciente || !paciente.IdPaciente) {
      console.error('Paciente o ID es undefined');
      return throwError(() => new Error('Paciente e ID son requeridos'));
    }

    console.log('Datos a enviar en PUT:', paciente);
    return this.http
      .put<Paciente>(
        `${this.apiUrl}/${paciente.IdPaciente}`,
        paciente,
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  eliminarPaciente(id: string): Observable<void> {
    // Verificar que el ID exista y sea válido
    if (!id) {
      console.error('ID es undefined o null');
      return throwError(() => new Error('ID del paciente es requerido'));
    }

    console.log('ID a eliminar:', id);
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Manejador de errores centralizado
  private handleError(error: any) {
    console.error('Error en la operación de API:', error);
    let errorMessage = 'Error en la operación. ';

    if (error.error instanceof ErrorEvent) {
      // Error del cliente
      errorMessage += `Error: ${error.error.message}`;
    } else {
      // El backend devolvió un código de error
      errorMessage += `Código: ${error.status}, Mensaje: ${error.message}`;

      // Log del cuerpo de la respuesta si existe
      if (error.error) {
        console.error('Detalles del error del servidor:', error.error);
      }
    }

    return throwError(() => new Error(errorMessage));
  }
}
