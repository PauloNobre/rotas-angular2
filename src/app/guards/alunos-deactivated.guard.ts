import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { ICanDeactivate } from './iCanDeactivate';

@Injectable()
export class AlunosDeactivatedGuard implements CanDeactivate<ICanDeactivate> {
  canDeactivate(
    component: ICanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

    return component.podeDesativar();
  }
}
