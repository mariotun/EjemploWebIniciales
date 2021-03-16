import { TestBed } from '@angular/core/testing';

import { MetodosGetService } from './metodos-get.service';

describe('MetodosGetService', () => {
  let service: MetodosGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetodosGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
