import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallmealComponent } from './viewallmeal.component';

describe('ViewallmealComponent', () => {
  let component: ViewallmealComponent;
  let fixture: ComponentFixture<ViewallmealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallmealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallmealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});