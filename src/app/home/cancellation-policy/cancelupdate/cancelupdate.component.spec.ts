import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelupdateComponent } from './cancelupdate.component';

describe('CancelupdateComponent', () => {
  let component: CancelupdateComponent;
  let fixture: ComponentFixture<CancelupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
