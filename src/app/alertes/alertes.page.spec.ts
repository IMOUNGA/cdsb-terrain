import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertesPage } from './alertes.page';

describe('Tab4Page', () => {
  let component: AlertesPage;
  let fixture: ComponentFixture<AlertesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
