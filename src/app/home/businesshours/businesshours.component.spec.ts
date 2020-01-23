import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesshoursComponent } from './businesshours.component';

describe('BusinesshoursComponent', () => {
  let component: BusinesshoursComponent;
  let fixture: ComponentFixture<BusinesshoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinesshoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinesshoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
