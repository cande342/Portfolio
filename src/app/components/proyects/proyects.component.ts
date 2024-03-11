import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MainProyectsComponent } from './main-proyects/main-proyects.component';
@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [CardModule, ButtonModule, SidebarComponent, MainProyectsComponent],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.css'
})
export class ProyectsComponent {

  rutaFondo:string='assets/fondo-proyectos.png';
  rutaFondoMain: string='assets/fondo-proyectos-main.png'

}
