import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatimentsPage } from './batiments.page';

describe('Tab1Page', () => {
  let component: BatimentsPage;
  let fixture: ComponentFixture<BatimentsPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(BatimentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
