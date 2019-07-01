import { TestBed } from '@angular/core/testing';

import { LigasService } from './ligas.service';

describe('LigasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LigasService = TestBed.get(LigasService);
    expect(service).toBeTruthy();
  });
});
