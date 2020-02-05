import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningmonthlistComponent } from './earningmonthlist.component';

describe('EarningmonthlistComponent', () => {
  let component: EarningmonthlistComponent;
  let fixture: ComponentFixture<EarningmonthlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarningmonthlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarningmonthlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
