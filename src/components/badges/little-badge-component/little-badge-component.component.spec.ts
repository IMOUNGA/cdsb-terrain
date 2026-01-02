import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LittleBadgeComponentComponent } from './little-badge-component.component';

describe('LittleBadgeComponentComponent', () => {
  let component: LittleBadgeComponentComponent;
  let fixture: ComponentFixture<LittleBadgeComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [LittleBadgeComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LittleBadgeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
