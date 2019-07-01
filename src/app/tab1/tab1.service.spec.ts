import { TestBed } from '@angular/core/testing';

import { Tab1Service } from './tab1.service';

describe('Tab1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Tab1Service = TestBed.get(Tab1Service);
    expect(service).toBeTruthy();
  });
});
