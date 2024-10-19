import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./modules/home/views/home-page/home-page.component";
import { AuthPageComponent } from "./modules/auth/views/auth-page/auth-page.component";
import { SidebarComponent } from "./modules/sidebar/views/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, AuthPageComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appRoutes';
}
