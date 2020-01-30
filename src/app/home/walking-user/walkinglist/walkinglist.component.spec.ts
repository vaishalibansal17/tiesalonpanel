import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkinglistComponent } from './walkinglist.component';

describe('WalkinglistComponent', () => {
  let component: WalkinglistComponent;
  let fixture: ComponentFixture<WalkinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
