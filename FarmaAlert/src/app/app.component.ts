import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-root',
  imports: [EstadisticasComponent,SidebarComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-angular';
}
