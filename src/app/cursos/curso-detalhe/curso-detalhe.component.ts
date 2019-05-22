import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(
    private _activetedRoute: ActivatedRoute,
    private _cursosService: CursosService,
    private _router: Router) {
    // console.log(this._activetedRoute);
    // this.id = this._activetedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.inscricao = this._activetedRoute.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.curso = this._cursosService.getCurso(this.id);

        if (this.curso == null) {
          this._router.navigate(['/cursos/nao-encontrado']);
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
