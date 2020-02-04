import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningdaylistComponent } from './earningdaylist.component';

describe('EarningdaylistComponent', () => {
  let component: EarningdaylistComponent;
  let fixture: ComponentFixture<EarningdaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarningdaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarningdaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
