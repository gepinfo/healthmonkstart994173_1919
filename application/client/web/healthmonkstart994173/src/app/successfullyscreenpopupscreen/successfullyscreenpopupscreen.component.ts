import { Component, OnInit } from '@angular/core';
import { SuccessfullyscreenpopupscreenService } from './successfullyscreenpopupscreen.service';

@Component({
  selector: 'app-successfullyscreenpopupscreen',
  templateUrl: './successfullyscreenpopupscreen.component.html',
  styleUrls: ['./successfullyscreenpopupscreen.component.scss'],
})

export class SuccessfullyscreenpopupscreenComponent implements OnInit {
    public nutritionentity = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        nutritionunit: '',
    }

    constructor (
        private successfullyscreenpopupscreenService: SuccessfullyscreenpopupscreenService,
    ) { }

    ngOnInit() {
        this.nutritionentity.created_by = sessionStorage.getItem('email') || ''; 
    }
}