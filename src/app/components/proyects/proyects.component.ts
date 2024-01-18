import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.css'
})
export class ProyectsComponent {

  imgReproductor: string ='assets/proyects/reproductor.png';
  imgTPE: string ='assets/proyects/tpweb.png';

}
