import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritioninsightsalldetailsComponent } from './nutritioninsightsalldetails.component';

describe('NutritioninsightsalldetailsComponent', () => {
  let component: NutritioninsightsalldetailsComponent;
  let fixture: ComponentFixture<NutritioninsightsalldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritioninsightsalldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritioninsightsalldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});