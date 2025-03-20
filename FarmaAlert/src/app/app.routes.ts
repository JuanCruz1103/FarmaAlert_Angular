import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
    { path: 'app-register', component: RegisterComponent }, // Ruta para el registro
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
