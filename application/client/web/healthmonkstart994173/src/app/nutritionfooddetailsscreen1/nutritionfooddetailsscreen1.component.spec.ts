import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nutritionfooddetailsscreen1Component } from './nutritionfooddetailsscreen1.component';

describe('Nutritionfooddetailsscreen1Component', () => {
  let component: Nutritionfooddetailsscreen1Component;
  let fixture: ComponentFixture<Nutritionfooddetailsscreen1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nutritionfooddetailsscreen1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nutritionfooddetailsscreen1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});