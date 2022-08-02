import { Component, OnInit } from '@angular/core';
import { EditeddetailspopupscreenService } from './editeddetailspopupscreen.service';

@Component({
  selector: 'app-editeddetailspopupscreen',
  templateUrl: './editeddetailspopupscreen.component.html',
  styleUrls: ['./editeddetailspopupscreen.component.scss'],
})

export class EditeddetailspopupscreenComponent implements OnInit {
    public nutritionentity = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        nutritionunit: '',
    }

    constructor (
        private editeddetailspopupscreenService: EditeddetailspopupscreenService,
    ) { }

    ngOnInit() {
        this.nutritionentity.created_by = sessionStorage.getItem('email') || ''; 
    }
}