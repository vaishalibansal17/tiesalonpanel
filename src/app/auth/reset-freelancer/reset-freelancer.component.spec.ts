import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetFreelancerComponent } from './reset-freelancer.component';

describe('ResetFreelancerComponent', () => {
  let component: ResetFreelancerComponent;
  let fixture: ComponentFixture<ResetFreelancerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetFreelancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
