import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecuperarContraComponent } from './recuperar-contra/recuperar-contra.component';


@Component({
  selector: 'app-root',
  imports: [RecuperarContraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-angular';
}
