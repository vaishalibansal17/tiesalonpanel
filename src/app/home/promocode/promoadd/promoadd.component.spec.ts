import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoaddComponent } from './promoadd.component';

describe('PromoaddComponent', () => {
  let component: PromoaddComponent;
  let fixture: ComponentFixture<PromoaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
