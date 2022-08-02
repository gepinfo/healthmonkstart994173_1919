import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritioninsightsmorningsnackscreenComponent } from './nutritioninsightsmorningsnackscreen.component';

describe('NutritioninsightsmorningsnackscreenComponent', () => {
  let component: NutritioninsightsmorningsnackscreenComponent;
  let fixture: ComponentFixture<NutritioninsightsmorningsnackscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritioninsightsmorningsnackscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritioninsightsmorningsnackscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});