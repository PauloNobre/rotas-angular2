import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';

const cursosRoutes: Routes = [
    {
        path: 'cursos',
        component: CursosComponent
    }, {
        path: 'curso/:id',
        component: CursoDetalheComponent
    }, {
        path: 'nao-encontrado',
        component: CursoNaoEncontradoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(cursosRoutes)],
    exports: [RouterModule]
})
export class CursosRoutingModule {}
