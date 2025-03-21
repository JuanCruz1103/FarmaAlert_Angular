// app.component.ts
import { Component } from '@angular/core';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  Router,
  NavigationEnd,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    SidebarComponent,
  ],
  template: `
    <div class="d-flex" *ngIf="showSidebar">
      <app-sidebar></app-sidebar>
      <main class="content-with-sidebar">
        <router-outlet></router-outlet>
      </main>
    </div>

    <main *ngIf="!showSidebar" class="content-full">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [
    `
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
      .content-with-sidebar {
        margin-left: 0px;
        padding: 0px;
        width: calc(100% - 250px);
        min-height: 100vh;
      }

      .content-full {
        margin-left: 0;
        padding: 20px;
        width: 100%;
        min-height: 100vh;
      }
    `,
  ],
})
export class AppComponent {
  showSidebar = true;

  constructor(private router: Router) {
    // Detectar cambios en la ruta para determinar si mostrar la barra lateral
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const routePath = event.urlAfterRedirects;
        this.showSidebar = !this.isNoSidebarRoute(routePath);
      });
  }

  private isNoSidebarRoute(route: string): boolean {
    // Rutas donde no queremos mostrar la barra lateral
    const noSidebarRoutes = ['/register', '/RecuperarContrasena', '/login'];
    return noSidebarRoutes.some((path) => route.startsWith(path));
  }
}
