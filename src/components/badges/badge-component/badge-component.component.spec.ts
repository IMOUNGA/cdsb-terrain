import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BadgeComponentComponent } from './badge-component.component';

describe('BadgeComponentComponent', () => {
  let component: BadgeComponentComponent;
  let fixture: ComponentFixture<BadgeComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BadgeComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
