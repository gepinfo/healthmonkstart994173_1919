import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfullyscreenpopupscreenComponent } from './successfullyscreenpopupscreen.component';

describe('SuccessfullyscreenpopupscreenComponent', () => {
  let component: SuccessfullyscreenpopupscreenComponent;
  let fixture: ComponentFixture<SuccessfullyscreenpopupscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfullyscreenpopupscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfullyscreenpopupscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});