import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffreviewComponent } from './staffreview.component';

describe('StaffreviewComponent', () => {
  let component: StaffreviewComponent;
  let fixture: ComponentFixture<StaffreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
