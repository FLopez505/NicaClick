import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealimentacionPage } from './realimentacion.page';

describe('RealimentacionPage', () => {
  let component: RealimentacionPage;
  let fixture: ComponentFixture<RealimentacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealimentacionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealimentacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
