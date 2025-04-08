import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import Chart from 'chart.js/auto';
import { NavbarComponent } from '../navbar/navbar.component';
import { EstadisticasService } from '../Services/estadisticas.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    NavbarComponent,
    HttpClientModule,
  ],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css',
})
export class EstadisticasComponent implements OnInit, AfterViewInit {
  Pacientes = 0; // Count of patients
  trabajadores = 0; // Count of workers
  Pastillas = 0; // Count of medications
  isLoading = true;

  @ViewChild('barChartCanvas') barChartCanvas!: ElementRef<HTMLCanvasElement>;
  barChart: Chart | null = null;

  constructor(private estadisticasService: EstadisticasService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    // Get patient count
    this.estadisticasService.getContarPacientes().subscribe({
      next: (count) => {
        this.Pacientes = count;
        this.checkAllDataLoaded();
      },
      error: (error) => {
        console.error('Error loading patients count:', error);
        this.handleError();
      },
    });

    // Get medication count
    this.estadisticasService.getContarMedicamentos().subscribe({
      next: (count) => {
        this.Pastillas = count;
        this.checkAllDataLoaded();
      },
      error: (error) => {
        console.error('Error loading medications count:', error);
        this.handleError();
      },
    });

    // Get workers
    this.estadisticasService.getTrabajadores().subscribe({
      next: (count) => {
        this.trabajadores = count;
        this.checkAllDataLoaded();
      },
      error: (error) => {
        console.error('Error loading workers:', error);
        this.handleError();
      },
    });
  }

  handleError() {
    // In case of error, still set isLoading to false so the UI doesn't get stuck
    this.isLoading = false;
  }

  checkAllDataLoaded() {
    // Check if all data has been loaded
    if (
      this.Pacientes !== 0 &&
      this.Pastillas !== 0 &&
      this.trabajadores !== 0
    ) {
      this.isLoading = false;
      // Try to initialize chart if view is already initialized
      setTimeout(() => {
        this.tryInitializeChart();
      });
    }
  }

  ngAfterViewInit() {
    // If data is already loaded, initialize chart
    if (!this.isLoading) {
      this.tryInitializeChart();
    }
  }

  tryInitializeChart() {
    // Check if canvas element exists and chart is not already initialized
    if (
      this.barChartCanvas &&
      this.barChartCanvas.nativeElement &&
      !this.barChart
    ) {
      this.initializeChart();
    }
  }

  initializeChart() {
    // Only initialize if canvas element exists
    if (this.barChartCanvas && this.barChartCanvas.nativeElement) {
      this.barChart = new Chart(this.barChartCanvas.nativeElement, {
        type: 'bar',
        data: {
          labels: ['Pacientes', 'Trabajadores', 'Medicamentos'],
          datasets: [
            {
              label: 'Cantidad',
              data: [this.Pacientes, this.trabajadores, this.Pastillas],
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
              borderColor: ['#FF6384', '#36A2EB', '#FFCE56'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: { beginAtZero: true },
          },
        },
      });
    }
  }

  updateChart() {
    // Only update if chart is initialized
    if (this.barChart) {
      this.barChart.data.datasets[0].data = [
        this.Pacientes,
        this.trabajadores,
        this.Pastillas,
      ];
      this.barChart.update();
    }
  }
}
