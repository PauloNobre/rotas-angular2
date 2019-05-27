import { TestBed, async, inject } from '@angular/core/testing';

import { AlunosDeactivatedGuard } from './alunos-deactivated.guard';

describe('AlunosDesactivatedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlunosDeactivatedGuard]
    });
  });

  it('should ...', inject([AlunosDeactivatedGuard], (guard: AlunosDeactivatedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
