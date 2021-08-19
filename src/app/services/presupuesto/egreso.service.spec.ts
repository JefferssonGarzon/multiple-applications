import { TestBed } from '@angular/core/testing';

import { EgresoService } from './egreso.service';

describe('EgresoService', () => {
  let service: EgresoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EgresoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
