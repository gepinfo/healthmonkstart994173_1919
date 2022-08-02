import { Component, OnInit } from '@angular/core';
import { SelectfooddetailsService } from './selectfooddetails.service';

@Component({
  selector: 'app-selectfooddetails',
  templateUrl: './selectfooddetails.component.html',
  styleUrls: ['./selectfooddetails.component.scss'],
})

export class SelectfooddetailsComponent implements OnInit {
    public nutritionentity = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        nutritionunit: '',
    }

    constructor (
        private selectfooddetailsService: SelectfooddetailsService,
    ) { }

    ngOnInit() {
        this.nutritionentity.created_by = sessionStorage.getItem('email') || ''; 
    }
}