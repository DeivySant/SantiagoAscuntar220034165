import { Routes } from '@angular/router';
import { InformationPersonalComponent } from './info-per/info-per.component';
import { InfoTecnicaComponent } from './info-tecnica/info-tecnica.component';
import { InfoPagComponent } from './info-pag/info-pag.component';

export const routes: Routes = [
    {
        path: 'personal',
        component: InformationPersonalComponent
    },
    {
        path: 'tecnica',
        component: InfoTecnicaComponent
    },
    {
        path: 'licencia',
        component: InfoPagComponent
    }
 
];
