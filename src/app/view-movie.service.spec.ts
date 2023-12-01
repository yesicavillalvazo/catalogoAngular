import { TestBed } from '@angular/core/testing';

import { ViewMovieService } from './view-movie.service';

describe('ViewMovieService', () => {
  let service: ViewMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
