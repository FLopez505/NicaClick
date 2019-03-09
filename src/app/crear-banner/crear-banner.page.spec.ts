import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearBannerPage } from './crear-banner.page';

describe('CrearBannerPage', () => {
  let component: CrearBannerPage;
  let fixture: ComponentFixture<CrearBannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearBannerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearBannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});