import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import Chart from 'chart.js/auto';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule, NavbarComponent],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css',
})
export class EstadisticasComponent implements AfterViewInit {
  proteuses = 80;
  trabajadores = 34;
  pacillas = 500;

  @ViewChild('barChartCanvas') barChartCanvas!: ElementRef<HTMLCanvasElement>;
  barChart!: Chart;

  ngAfterViewInit() {
    this.barChart = new Chart(this.barChartCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Proteuses', 'Trabajadores', 'Pacillas'],
        datasets: [
          {
            label: 'Cantidad',
            data: [this.proteuses, this.trabajadores, this.pacillas],
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
