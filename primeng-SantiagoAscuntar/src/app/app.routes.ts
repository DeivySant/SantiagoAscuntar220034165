import { Routes } from '@angular/router';
import { LoginComponent } from './componets/login/login.component';
import { RegisterComponent } from './componets/register/register.component';
import { HomeComponent } from './componets/home/home.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },

    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    }
];
