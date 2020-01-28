import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpasswordfreelancerComponent } from './resetpasswordfreelancer.component';

describe('ResetpasswordfreelancerComponent', () => {
  let component: ResetpasswordfreelancerComponent;
  let fixture: ComponentFixture<ResetpasswordfreelancerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetpasswordfreelancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetpasswordfreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
