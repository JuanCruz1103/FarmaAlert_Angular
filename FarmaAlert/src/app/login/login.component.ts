import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';


@Component({
  selector: 'app-login',
  imports: [RegisterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  passwordVisible: boolean = false;

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  constructor(private router: Router){}
  Registro(){
    this.router.navigate(['/register']);
  }
}
