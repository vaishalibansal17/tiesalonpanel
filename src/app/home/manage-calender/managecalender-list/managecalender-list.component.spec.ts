import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecalenderListComponent } from './managecalender-list.component';

describe('ManagecalenderListComponent', () => {
  let component: ManagecalenderListComponent;
  let fixture: ComponentFixture<ManagecalenderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagecalenderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecalenderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
