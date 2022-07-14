import { TestBed } from '@angular/core/testing';

import { DatatwoService } from './datatwo.service';

describe('DatatwoService', () => {
  let service: DatatwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatatwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
