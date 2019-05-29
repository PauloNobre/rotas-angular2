import { Observable } from 'rxjs/Observable';
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AlunosService } from './../alunos.service';
import { Aluno } from '../aluno';

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {
    constructor(private _alunosService: AlunosService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Aluno | Observable<any> | Promise<any> {
            let id = route.params['id'];
            return this._alunosService.getAluno(id);
    }

}