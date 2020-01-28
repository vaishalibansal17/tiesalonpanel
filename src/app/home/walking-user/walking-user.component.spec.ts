import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkingUserComponent } from './walking-user.component';

describe('WalkingUserComponent', () => {
  let component: WalkingUserComponent;
  let fixture: ComponentFixture<WalkingUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkingUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
