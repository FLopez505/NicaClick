import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisPlantillasPage } from './mis-plantillas.page';

describe('MisPlantillasPage', () => {
  let component: MisPlantillasPage;
  let fixture: ComponentFixture<MisPlantillasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisPlantillasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisPlantillasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
