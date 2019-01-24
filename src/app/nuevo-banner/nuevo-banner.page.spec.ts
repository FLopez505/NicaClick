import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoBannerPage } from './nuevo-banner.page';

describe('NuevoBannerPage', () => {
  let component: NuevoBannerPage;
  let fixture: ComponentFixture<NuevoBannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoBannerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoBannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
