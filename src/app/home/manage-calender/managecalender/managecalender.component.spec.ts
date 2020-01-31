import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecalenderComponent } from './managecalender.component';

describe('ManagecalenderComponent', () => {
  let component: ManagecalenderComponent;
  let fixture: ComponentFixture<ManagecalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagecalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
