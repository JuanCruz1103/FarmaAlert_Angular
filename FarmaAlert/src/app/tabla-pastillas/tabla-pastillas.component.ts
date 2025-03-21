import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-tabla-pastillas',
  imports: [NavbarComponent],
  templateUrl: './tabla-pastillas.component.html',
  styleUrl: './tabla-pastillas.component.css'
})
export class TablaPastillasComponent {

agregar() {
  alert('Agregar Pastilla');
}

// Función para editar un trabajador
editar(pastilla: any) {
  alert(`Editar pastilla: ${pastilla.nombre}`);
}

// Función para eliminar un trabajador
eliminar(Medicamento: number) {
  if (confirm('¿Estás seguro de eliminar esta pastilla?')) {
    this.pastillas = this.pastillas.filter(t => t.id !== Medicamento);
  }
}
pastillas = [
  { id: 1, nombre: 'Aspirina', edad: '2025-12-01', paciente: 'Juan Pérez' },
  { id: 2, nombre: 'Paracetamol', edad: '2026-05-01', paciente: 'Ana López' }
];
}
