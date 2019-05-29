import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { AlunosService } from './../alunos.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: Aluno;
  inscricao: Subscription;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _alunosService: AlunosService,
    private _router: Router) { }

  ngOnInit() {
    /* this.inscricao = this._activatedRoute.params.subscribe(
      (params: any) => {
        const id = params['id'];
        this.aluno = this._alunosService.getAluno(id);

        if (this.aluno === null) {
          this.aluno = {};
        }
      }
    );*/
    this.inscricao = this._activatedRoute.data.subscribe(
      info =>  {
        this.aluno = info.aluno;
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  editarContato() {
    this._router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

}
