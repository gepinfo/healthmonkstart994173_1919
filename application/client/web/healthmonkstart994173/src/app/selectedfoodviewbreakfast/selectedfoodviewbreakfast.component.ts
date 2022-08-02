import { Component, OnInit } from '@angular/core';
import { SelectedfoodviewbreakfastService } from './selectedfoodviewbreakfast.service';

@Component({
  selector: 'app-selectedfoodviewbreakfast',
  templateUrl: './selectedfoodviewbreakfast.component.html',
  styleUrls: ['./selectedfoodviewbreakfast.component.scss'],
})

export class SelectedfoodviewbreakfastComponent implements OnInit {
    public nutritionentity = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        nutritionunit: '',
    }

    constructor (
        private selectedfoodviewbreakfastService: SelectedfoodviewbreakfastService,
    ) { }

    ngOnInit() {
        this.nutritionentity.created_by = sessionStorage.getItem('email') || ''; 
    }
}