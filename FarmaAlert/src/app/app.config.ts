// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Asegúrate de tener este archivo

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), provideAnimations(), provideRouter(routes)],
};
// export const API_URL = 'http://localhost:44398/api'; // URL de tu API
// export co  nst API_URL_PACIENTE = `${API_URL}/Paciente`; // URL de tu API de Pacientes
