import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipasInfoPage } from './equipas-info.page';

describe('EquipasInfoPage', () => {
  let component: EquipasInfoPage;
  let fixture: ComponentFixture<EquipasInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipasInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipasInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
