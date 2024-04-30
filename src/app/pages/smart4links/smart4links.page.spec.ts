import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Smart4linksPage } from './smart4links.page';

describe('Smart4linksPage', () => {
  let component: Smart4linksPage;
  let fixture: ComponentFixture<Smart4linksPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Smart4linksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
