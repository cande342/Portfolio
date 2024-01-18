import { Component } from '@angular/core';
import { SidebarComponent} from './components/sidebar/sidebar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ProyectsComponent } from '../proyects/proyects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, MainContentComponent, ProyectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  rutaImagen: string = 'assets/fondo-main.png'
  rutaFondo: string = 'assets/fondo.png'
}
