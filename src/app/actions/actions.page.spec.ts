import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsPage } from './actions.page';

describe('Tab3Page', () => {
  let component: ActionsPage;
  let fixture: ComponentFixture<ActionsPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(ActionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
