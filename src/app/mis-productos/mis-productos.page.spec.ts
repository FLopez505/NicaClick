import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisProductosPage } from './mis-productos.page';

describe('MisProductosPage', () => {
  let component: MisProductosPage;
  let fixture: ComponentFixture<MisProductosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisProductosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
