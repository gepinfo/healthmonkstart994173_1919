import { Component, OnInit } from '@angular/core';
import { NutritioninsightsbreakfastscreenService } from './nutritioninsightsbreakfastscreen.service';

@Component({
  selector: 'app-nutritioninsightsbreakfastscreen',
  templateUrl: './nutritioninsightsbreakfastscreen.component.html',
  styleUrls: ['./nutritioninsightsbreakfastscreen.component.scss'],
})

export class NutritioninsightsbreakfastscreenComponent implements OnInit {
    public nutritionentity = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        nutritionunit: '',
    }

    constructor (
        private nutritioninsightsbreakfastscreenService: NutritioninsightsbreakfastscreenService,
    ) { }

    ngOnInit() {
        this.nutritionentity.created_by = sessionStorage.getItem('email') || ''; 
    }
}