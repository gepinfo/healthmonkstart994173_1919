import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectfooddetailsComponent } from './selectfooddetails.component';

describe('SelectfooddetailsComponent', () => {
  let component: SelectfooddetailsComponent;
  let fixture: ComponentFixture<SelectfooddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectfooddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectfooddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});