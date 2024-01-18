import { Component } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [ProgressBarModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
 
  logoCss:string ='assets/iconos/css.png';
  logoJs: string='assets/iconos/js.png';
  logoAng: string='assets/iconos/angular.png';
  logoBoot: string='assets/iconos/bootstrap.png';
 
}
