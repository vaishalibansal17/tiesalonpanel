import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarninglistComponent } from './earninglist.component';

describe('EarninglistComponent', () => {
  let component: EarninglistComponent;
  let fixture: ComponentFixture<EarninglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarninglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarninglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
