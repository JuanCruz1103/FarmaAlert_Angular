import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-tabla-pastillas',
  imports: [SidebarComponent, NavbarComponent,],
  templateUrl: './tabla-pastillas.component.html',
  styleUrl: './tabla-pastillas.component.css'
})
export class TablaPastillasComponent {

}
