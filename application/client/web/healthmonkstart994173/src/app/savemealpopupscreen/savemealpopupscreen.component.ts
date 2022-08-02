import { Component, OnInit } from '@angular/core';
import { SavemealpopupscreenService } from './savemealpopupscreen.service';

@Component({
  selector: 'app-savemealpopupscreen',
  templateUrl: './savemealpopupscreen.component.html',
  styleUrls: ['./savemealpopupscreen.component.scss'],
})

export class SavemealpopupscreenComponent implements OnInit {
    public nutritionentity = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        nutritionunit: '',
    }

    constructor (
        private savemealpopupscreenService: SavemealpopupscreenService,
    ) { }

    ngOnInit() {
        this.nutritionentity.created_by = sessionStorage.getItem('email') || ''; 
    }
}