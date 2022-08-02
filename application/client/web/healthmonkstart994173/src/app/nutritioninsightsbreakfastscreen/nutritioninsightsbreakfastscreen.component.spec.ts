import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritioninsightsbreakfastscreenComponent } from './nutritioninsightsbreakfastscreen.component';

describe('NutritioninsightsbreakfastscreenComponent', () => {
  let component: NutritioninsightsbreakfastscreenComponent;
  let fixture: ComponentFixture<NutritioninsightsbreakfastscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritioninsightsbreakfastscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritioninsightsbreakfastscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});