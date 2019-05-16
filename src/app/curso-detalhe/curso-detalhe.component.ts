import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: string;

  constructor(private _activetedRoute: ActivatedRoute) {
    console.log(this._activetedRoute);
    this.id = this._activetedRoute.snapshot.params['id'];
  }

  ngOnInit() {}

}
