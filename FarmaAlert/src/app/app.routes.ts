import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { LoginComponent } from './login/login.component';
import { TablaPasientesComponent } from './tabla-pasientes/tabla-pasientes.component';
import { TablaTrabajadoresComponent } from './tabla-trabajadores/tabla-trabajadores.component';
import { TablaPastillasComponent } from './tabla-pastillas/tabla-pastillas.component';
import { RecuperarContraComponent } from './recuperar-contra/recuperar-contra.component';

export const routes: Routes = [
  { path: 'dashboard', component: EstadisticasComponent },
  { path: 'pacientes', component: TablaPasientesComponent },
  { path: 'trabajadores', component: TablaTrabajadoresComponent },
  { path: 'medicamentos', component: TablaPastillasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'RecuperarContrasena', component: RecuperarContraComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
