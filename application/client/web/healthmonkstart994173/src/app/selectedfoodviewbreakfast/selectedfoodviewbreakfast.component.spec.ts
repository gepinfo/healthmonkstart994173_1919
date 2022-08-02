import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedfoodviewbreakfastComponent } from './selectedfoodviewbreakfast.component';

describe('SelectedfoodviewbreakfastComponent', () => {
  let component: SelectedfoodviewbreakfastComponent;
  let fixture: ComponentFixture<SelectedfoodviewbreakfastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedfoodviewbreakfastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedfoodviewbreakfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});