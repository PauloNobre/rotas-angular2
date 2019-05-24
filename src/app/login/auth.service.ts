import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

import { Usuario } from './usuario';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private _router: Router) { }

  login(usuario: Usuario) {
    if (usuario.nome === 'admin' && usuario.senha === 'admin') {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this._router.navigate(['/']);
    } else {
      this.usuarioAutenticado = false;
    }
  }

}
