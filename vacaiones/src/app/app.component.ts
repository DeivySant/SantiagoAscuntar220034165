import { Component } from '@angular/core';
import { InformationPersonalComponent } from './info-per/info-per.component';
import { InfoTecnicaComponent } from "./info-tecnica/info-tecnica.component";
import { InfoPagComponent } from './info-pag/info-pag.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ InfoPagComponent,InfoTecnicaComponent, InformationPersonalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'vacaiones';
}
