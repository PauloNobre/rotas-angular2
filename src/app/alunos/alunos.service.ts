import { Injectable } from '@angular/core';

import { Aluno } from './aluno';

@Injectable()
export class AlunosService {

  private alunos: Aluno[] = [
    {id: 1, nome: 'Aluno 01', email: 'aluno01@email.com'},
    {id: 2, nome: 'Aluno 02', email: 'aluno02@email.com'},
    {id: 3, nome: 'Aluno 03', email: 'aluno03@email.com'}
  ];

  constructor() { }

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number) {
    // this.alunos.forEach(aluno => {
    //   if (aluno.id === id) {
    //     return aluno;
    //   }
    // });

    for (let i = 0; i < this.alunos.length; i++) {
      const aluno = this.alunos[i];
// tslint:disable-next-line: triple-equals
      if (aluno.id == id) {
        return aluno;
      }
    }
    return null;
  }

}
