import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificanosPage } from './calificanos.page';

describe('CalificanosPage', () => {
  let component: CalificanosPage;
  let fixture: ComponentFixture<CalificanosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificanosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificanosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
