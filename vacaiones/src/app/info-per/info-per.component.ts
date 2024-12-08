import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-information-personal',
  templateUrl: './info-per.component.html',
  styleUrls: ['./info-per.component.css'],
  standalone: true,
  imports: [FormsModule, CardModule, ButtonModule,],
})
export class InformationPersonalComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
}
