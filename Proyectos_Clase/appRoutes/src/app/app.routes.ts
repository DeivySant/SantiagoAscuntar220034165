import { Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/views/home-page/home-page.component';
import { AuthPageComponent } from './modules/auth/views/auth-page/auth-page.component';
import { SidebarComponent } from './modules/sidebar/views/sidebar/sidebar.component';

export const routes: Routes = [

    {
        path:'',
        component:HomePageComponent
    },
    {
        path:'Auth',
        component:AuthPageComponent
    },
    {
        path:'sidebar',
        component:SidebarComponent
    }
];

