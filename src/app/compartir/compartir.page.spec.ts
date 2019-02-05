import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartirPage } from './compartir.page';

describe('CompartirPage', () => {
  let component: CompartirPage;
  let fixture: ComponentFixture<CompartirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompartirPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompartirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
