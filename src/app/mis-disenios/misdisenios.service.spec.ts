import { TestBed } from '@angular/core/testing';

import { MisdiseniosService } from './misdisenios.service';

describe('MisdiseniosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MisdiseniosService = TestBed.get(MisdiseniosService);
    expect(service).toBeTruthy();
  });
});
