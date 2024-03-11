import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProyectsComponent } from './components/proyects/proyects.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'proyects', component: ProyectsComponent },
];
