import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosDeactivatedGuard } from '../guards/alunos-deactivated.guard';
import { AlunoDetalheResolver } from '../alunos/guards/aluno-detalhes.resolver';

const alunosRoutes: Routes = [
    {
        path: '',
        component: AlunosComponent,
        children: [
            {
                path: 'novo',
                component: AlunoFormComponent
            }, {
                path: ':id',
                component: AlunoDetalheComponent,
                resolve: { aluno : AlunoDetalheResolver }
            }, {
                path: ':id/editar',
                component: AlunoFormComponent,
                canDeactivate: [AlunosDeactivatedGuard]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule { }
