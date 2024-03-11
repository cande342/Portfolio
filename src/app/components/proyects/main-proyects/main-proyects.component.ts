import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-main-proyects',
  standalone: true,
  imports: [ButtonModule, CardModule],
  templateUrl: './main-proyects.component.html',
  styleUrl: './main-proyects.component.css'
})
export class MainProyectsComponent {

  imgReproductor: string ='assets/proyects/reproductor.png';
  imgBoard: string = 'assets/proyects/board.png';
  imgTPE: string ='assets/proyects/tpweb.png';
  
}
