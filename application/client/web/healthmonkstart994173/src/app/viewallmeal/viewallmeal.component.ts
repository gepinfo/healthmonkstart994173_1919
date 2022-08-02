import { Component, OnInit } from '@angular/core';
import { ViewallmealService } from './viewallmeal.service';

@Component({
  selector: 'app-viewallmeal',
  templateUrl: './viewallmeal.component.html',
  styleUrls: ['./viewallmeal.component.scss'],
})

export class ViewallmealComponent implements OnInit {
    public nutritionentity = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        nutritionunit: '',
    }

    constructor (
        private viewallmealService: ViewallmealService,
    ) { }

    ngOnInit() {
        this.nutritionentity.created_by = sessionStorage.getItem('email') || ''; 
    }
}