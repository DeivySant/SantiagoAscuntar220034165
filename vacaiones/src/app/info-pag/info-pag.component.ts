import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-info-pag',
  standalone: true,
  imports: [FormsModule,ButtonModule, CardModule],
  templateUrl: './info-pag.component.html',
  styleUrl: './info-pag.component.css'
})
export class InfoPagComponent {
    
}
