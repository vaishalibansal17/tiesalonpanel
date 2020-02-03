import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoinfoComponent } from './promoinfo.component';

describe('PromoinfoComponent', () => {
  let component: PromoinfoComponent;
  let fixture: ComponentFixture<PromoinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
