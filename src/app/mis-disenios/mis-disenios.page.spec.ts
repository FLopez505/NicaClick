import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisDiseniosPage } from './mis-disenios.page';

describe('MisDiseniosPage', () => {
  let component: MisDiseniosPage;
  let fixture: ComponentFixture<MisDiseniosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisDiseniosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisDiseniosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
