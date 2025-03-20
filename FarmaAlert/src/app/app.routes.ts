import { Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
    { path: 'login', component: RegisterComponent },
    { path: '**', redirectTo: 'login' }
];
