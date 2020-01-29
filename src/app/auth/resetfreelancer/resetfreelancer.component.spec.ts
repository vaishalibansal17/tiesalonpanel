import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetfreelancerComponent } from './resetfreelancer.component';

describe('ResetfreelancerComponent', () => {
  let component: ResetfreelancerComponent;
  let fixture: ComponentFixture<ResetfreelancerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetfreelancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetfreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
