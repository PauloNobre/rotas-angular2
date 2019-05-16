import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const APP_ROUTES: Routes = [
    { 
        path: '',
        component: HomeComponent
    },{
        path:'login',
        component: LoginComponent
    },{
        path: 'cursos',
        component: CursosComponent
    },{
        path: 'curso/:id',
        component: CursoDetalheComponent
    },{
        path: 'nao-encontrado',
        component: CursoNaoEncontradoComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);