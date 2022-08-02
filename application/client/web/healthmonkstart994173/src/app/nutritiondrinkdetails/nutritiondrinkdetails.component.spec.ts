import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritiondrinkdetailsComponent } from './nutritiondrinkdetails.component';

describe('NutritiondrinkdetailsComponent', () => {
  let component: NutritiondrinkdetailsComponent;
  let fixture: ComponentFixture<NutritiondrinkdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritiondrinkdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritiondrinkdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});