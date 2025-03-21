import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-tabla-pasientes',
  imports: [NavbarComponent],
  templateUrl: './tabla-pasientes.component.html',
  styleUrl: './tabla-pasientes.component.css'
})
export class TablaPasientesComponent {

  // Datos de ejemplo
  pacientes = [
    { id: 1, pacientes: 'Juan Pérez', habitacion: '101', medicamentos: 'Aspirina, Paracetamol', detalles: 'Paciente con fiebre' },
    { id: 2, pacientes: 'Ana López', habitacion: '102', medicamentos: 'Ibuprofeno', detalles: 'Dolor de cabeza' }
  ];

  agregar() {
    alert('Agregar paciente');
    // Aquí puedes agregar lógica para agregar un paciente a la lista
    this.pacientes.push({
      id: this.pacientes.length + 1,
      pacientes: 'Nuevo Paciente',
      habitacion: '105',
      medicamentos: 'Ninguno',
      detalles: 'Sin detalles'
    });
  }
  
  editar(paciente: any) {
    alert(`Editar paciente: ${paciente.pacientes}`);
    // Lógica de edición
  }

  eliminar(id: number) {
    if (confirm('¿Estás seguro de eliminar este paciente?')) {
      this.pacientes = this.pacientes.filter(p => p.id !== id);
    }
  }
}
