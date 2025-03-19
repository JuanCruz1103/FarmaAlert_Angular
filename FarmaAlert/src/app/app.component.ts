import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaTrabajadoresComponent } from "./tabla-trabajadores/tabla-trabajadores.component";

@Component({
  selector: 'app-root',
  imports: [ TablaTrabajadoresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-angular';
}
