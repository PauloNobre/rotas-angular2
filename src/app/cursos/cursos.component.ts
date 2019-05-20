import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {

  cursos: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(
    private _cursosService: CursosService,
    private _activatedRouter: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.cursos = this._cursosService.getCursos();

    this.inscricao = this._activatedRouter.queryParams.subscribe(
      (queryParams: any) =>{
        this.pagina = queryParams['pagina'];
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    //this.pagina++;
    this._router.navigate(['/cursos'],
    {queryParams: {'pagina':++this.pagina}});
  }
}
