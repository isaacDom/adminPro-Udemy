import { RouterModule, Routes} from '@angular/router';
import { Component } from '@angular/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/LoginComponent';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagesfoundComponent } from './shared/nopagesfound/nopagesfound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/Register.component';


const appRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        ] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NopagesfoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, {useHash: true});
