import { Component } from '@angular/core';
import { AuthPageComponent } from "../../../auth/views/auth-page/auth-page.component";
import { SidebarComponent } from '../../../sidebar/views/sidebar/sidebar.component';
import { SidetopPageComponent } from "../../../sidetop/views/sidetop-page/sidetop-page.component";
import { PrimePageComponent } from "../../../prime/views/prime-page/prime-page.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AuthPageComponent, SidetopPageComponent, PrimePageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
