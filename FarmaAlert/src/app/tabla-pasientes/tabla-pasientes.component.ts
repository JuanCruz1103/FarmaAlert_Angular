import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-tabla-pasientes',
  imports: [SidebarComponent, NavbarComponent,],
  templateUrl: './tabla-pasientes.component.html',
  styleUrl: './tabla-pasientes.component.css'
})
export class TablaPasientesComponent {

}
