import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SavemealpopupscreenComponent } from './savemealpopupscreen.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgSelectModule,
        FormsModule, ReactiveFormsModule,
        RouterModule.forChild([
            { path: '', component: SavemealpopupscreenComponent },
        ])
    ],
    declarations: [
        SavemealpopupscreenComponent,
    ]
})
export class SavemealpopupscreenModule { }