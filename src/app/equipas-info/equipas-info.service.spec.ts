import { TestBed } from '@angular/core/testing';

import { EquipasInfoService } from './equipas-info.service';

describe('EquipasInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EquipasInfoService = TestBed.get(EquipasInfoService);
    expect(service).toBeTruthy();
  });
});
