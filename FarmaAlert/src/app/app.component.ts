import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { TablaTrabajadoresComponent } from "./tabla-trabajadores/tabla-trabajadores.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
//import { TablaPastillasComponent } from './tabla-pastillas/tabla-pastillas.component';
import { TablaPasientesComponent } from './tabla-pasientes/tabla-pasientes.component';

@Component({
  selector: 'app-root',
  imports: [ SidebarComponent, NavbarComponent,TablaPasientesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-angular';
}
