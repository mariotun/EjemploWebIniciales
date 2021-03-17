import { TestBed } from '@angular/core/testing';

import { MetodosPostPostService } from './metodos-post-post.service';

describe('MetodosPostPostService', () => {
  let service: MetodosPostPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetodosPostPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
