import { Component, OnInit } from '@angular/core';
import { Nutritionfooddetailsscreen1Service } from './nutritionfooddetailsscreen1.service';

@Component({
  selector: 'app-nutritionfooddetailsscreen1',
  templateUrl: './nutritionfooddetailsscreen1.component.html',
  styleUrls: ['./nutritionfooddetailsscreen1.component.scss'],
})

export class Nutritionfooddetailsscreen1Component implements OnInit {
    public nutritionentity = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        nutritionunit: '',
    }

    constructor (
        private nutritionfooddetailsscreen1Service: Nutritionfooddetailsscreen1Service,
    ) { }

    ngOnInit() {
        this.nutritionentity.created_by = sessionStorage.getItem('email') || ''; 
    }
}