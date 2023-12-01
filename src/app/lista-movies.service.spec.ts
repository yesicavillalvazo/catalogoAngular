import { TestBed } from '@angular/core/testing';

import { ListaMoviesService } from './lista-movies.service';

describe('ListaMoviesService', () => {
  let service: ListaMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
