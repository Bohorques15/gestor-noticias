import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AutenticacionGuard } from './autenticacion/autenticacion.guard';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AutenticacionGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },

    // otra ruta redirecciona a la pagina de inicio
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);