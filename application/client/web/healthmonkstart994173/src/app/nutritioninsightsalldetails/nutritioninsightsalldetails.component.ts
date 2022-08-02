import { Component, OnInit } from '@angular/core';
import { NutritioninsightsalldetailsService } from './nutritioninsightsalldetails.service';

@Component({
  selector: 'app-nutritioninsightsalldetails',
  templateUrl: './nutritioninsightsalldetails.component.html',
  styleUrls: ['./nutritioninsightsalldetails.component.scss'],
})

export class NutritioninsightsalldetailsComponent implements OnInit {
    public nutritionentity = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        nutritionunit: '',
    }

    constructor (
        private nutritioninsightsalldetailsService: NutritioninsightsalldetailsService,
    ) { }

    ngOnInit() {
        this.nutritionentity.created_by = sessionStorage.getItem('email') || ''; 
    }
}