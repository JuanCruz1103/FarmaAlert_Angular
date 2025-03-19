import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-tabla-trabajadores',
  imports: [SidebarComponent, NavbarComponent,],
  templateUrl: './tabla-trabajadores.component.html',
  styleUrl: './tabla-trabajadores.component.css'
})
export class TablaTrabajadoresComponent {

}