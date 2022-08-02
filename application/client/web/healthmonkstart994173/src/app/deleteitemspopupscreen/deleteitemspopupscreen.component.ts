import { Component, OnInit } from '@angular/core';
import { DeleteitemspopupscreenService } from './deleteitemspopupscreen.service';

@Component({
  selector: 'app-deleteitemspopupscreen',
  templateUrl: './deleteitemspopupscreen.component.html',
  styleUrls: ['./deleteitemspopupscreen.component.scss'],
})

export class DeleteitemspopupscreenComponent implements OnInit {
    public nutritionentity = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        nutritionunit: '',
    }

    constructor (
        private deleteitemspopupscreenService: DeleteitemspopupscreenService,
    ) { }

    ngOnInit() {
        this.nutritionentity.created_by = sessionStorage.getItem('email') || ''; 
    }
}