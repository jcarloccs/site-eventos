import { TestBed } from '@angular/core/testing';

import { DadosNoticiasService } from './dados-noticias.service';

describe('DadosNoticiasService', () => {
  let service: DadosNoticiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosNoticiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
