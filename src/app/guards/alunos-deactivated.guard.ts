import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';

@Injectable()
export class AlunosDeactivatedGuard implements CanDeactivate<AlunoFormComponent> {
  canDeactivate(
    component: AlunoFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

    return component.podeMudarRota();
  }
}
