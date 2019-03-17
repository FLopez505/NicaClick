import { TestBed } from '@angular/core/testing';

import { MisplantillasService } from './misplantillas.service';

describe('MisplantillasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MisplantillasService = TestBed.get(MisplantillasService);
    expect(service).toBeTruthy();
  });
});
