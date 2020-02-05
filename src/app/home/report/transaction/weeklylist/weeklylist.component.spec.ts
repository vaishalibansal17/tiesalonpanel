import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklylistComponent } from './weeklylist.component';

describe('WeeklylistComponent', () => {
  let component: WeeklylistComponent;
  let fixture: ComponentFixture<WeeklylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
