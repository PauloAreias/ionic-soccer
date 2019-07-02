import { TestBed } from '@angular/core/testing';

import { Tab2Service } from './tab2.service';

describe('Tab2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Tab2Service = TestBed.get(Tab2Service);
    expect(service).toBeTruthy();
  });
});
