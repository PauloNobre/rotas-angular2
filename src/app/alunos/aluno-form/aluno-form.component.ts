import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy {

  aluno: any;
  inscricao: Subscription;
  private formMudou: boolean = false;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this._activatedRoute.params.subscribe(
      (params: any) => {
        const id = params['id'];
        this.aluno = this._alunosService.getAluno(id);
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onInput() {
    this.formMudou = true;
  }

  podeMudarRota(): boolean {
    if (this.formMudou) {
      return confirm('Tem certeza que deseja sair dessa página?');
    }
    return true;
  }

}
