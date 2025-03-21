// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  template: `
    <div class="d-flex">
      <!-- Sidebar -->
      <div class="d-flex flex-column p-3 text-white bg-dark sidebar">
        <img src="assets/Imagenes/FarmaAlertPNGWhite.svg" width="100%" alt="FarmaAlertPNGWhite">
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a routerLink="/dashboard" routerLinkActive="active" class="nav-link text-white">📊 Estadísticas</a>
          </li>
          <li>
            <a routerLink="/pacientes" routerLinkActive="active" class="nav-link text-white">🧑‍⚕️ Pacientes</a>
          </li>
          <li>
            <a routerLink="/medicamentos" routerLinkActive="active" class="nav-link text-white">💊 Medicamentos</a>
          </li>
          <li>
            <a routerLink="/trabajadores" routerLinkActive="active" class="nav-link text-white">👨‍🏭 Trabajadores</a>
          </li>
          <li>
              <a routerLink="/login" routerLinkActive="active"  class="nav-link text-danger">🚪 Cerrar sesión</a>
            </li>
        </ul>
      </div>

      <!-- Main content -->
      <main class="content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .sidebar {
      width: 250px;
      height: 100vh;
      position: fixed;
      z-index: 1;
    }
    
    .content {
      margin-left: 250px;
      padding: 20px;
      width: calc(100% - 250px);
      min-height: 100vh;
    }
    
    .nav-link.active {
      background-color: #0d6efd !important;
    }
  `]
})
export class AppComponent {
  title = 'farma-alert';
} 