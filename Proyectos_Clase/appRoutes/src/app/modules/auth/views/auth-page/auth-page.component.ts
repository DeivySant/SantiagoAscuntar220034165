import { Component } from '@angular/core';
import { SidebarComponent } from '../../../sidebar/views/sidebar/sidebar.component';
import { SidetopPageComponent } from "../../../sidetop/views/sidetop-page/sidetop-page.component";
import { ContentPageComponent } from "../../../content/views/content-page/content-page.component";

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [SidebarComponent, SidetopPageComponent, ContentPageComponent],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent {

}
