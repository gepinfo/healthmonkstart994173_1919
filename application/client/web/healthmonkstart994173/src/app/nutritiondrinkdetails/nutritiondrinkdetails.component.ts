import { Component, OnInit } from '@angular/core';
import { NutritiondrinkdetailsService } from './nutritiondrinkdetails.service';

@Component({
  selector: 'app-nutritiondrinkdetails',
  templateUrl: './nutritiondrinkdetails.component.html',
  styleUrls: ['./nutritiondrinkdetails.component.scss'],
})

export class NutritiondrinkdetailsComponent implements OnInit {
    public nutritionentity = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        nutritionunit: '',
    }

    constructor (
        private nutritiondrinkdetailsService: NutritiondrinkdetailsService,
    ) { }

    ngOnInit() {
        this.nutritionentity.created_by = sessionStorage.getItem('email') || ''; 
    }
}