import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { TablaTrabajadoresComponent } from "./tabla-trabajadores/tabla-trabajadores.component";

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, NavbarComponent, TablaTrabajadoresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-angular';
}
