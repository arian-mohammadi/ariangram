import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AriangramPage } from './ariangram.page';

describe('AriangramPage', () => {
  let component: AriangramPage;
  let fixture: ComponentFixture<AriangramPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AriangramPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AriangramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
