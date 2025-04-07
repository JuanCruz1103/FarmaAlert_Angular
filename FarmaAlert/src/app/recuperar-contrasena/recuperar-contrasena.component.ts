import { Component } from '@angular/core';

@Component({
  selector: 'app-recuperar-contrasena',
  imports: [],
  templateUrl: './recuperar-contrasena.component.html',
  styleUrl: './recuperar-contrasena.component.css'
})
export class RecuperarContrasenaComponent {
  codigo: string = '';
  tiempoRestante: number = 30;
  intervalo: any;

  ngOnInit() {
    this.iniciarTemporizador();
  }

  iniciarTemporizador() {
    this.intervalo = setInterval(() => {
      if (this.tiempoRestante > 0) {
        this.tiempoRestante--;
      } else {
        clearInterval(this.intervalo);
      }
    }, 1000);
  }

  cancelar() {
    console.log('Acción cancelada');
  }

  confirmar() {
    console.log('Código ingresado:', this.codigo);
  }
}

