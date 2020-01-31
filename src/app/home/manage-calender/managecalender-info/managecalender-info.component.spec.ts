import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecalenderInfoComponent } from './managecalender-info.component';

describe('ManagecalenderInfoComponent', () => {
  let component: ManagecalenderInfoComponent;
  let fixture: ComponentFixture<ManagecalenderInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagecalenderInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecalenderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
