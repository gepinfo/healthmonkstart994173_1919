import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Nutritionfooddetailsscreen1Component } from './nutritionfooddetailsscreen1.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgSelectModule,
        FormsModule, ReactiveFormsModule,
        RouterModule.forChild([
            { path: '', component: Nutritionfooddetailsscreen1Component },
        ])
    ],
    declarations: [
        Nutritionfooddetailsscreen1Component,
    ]
})
export class Nutritionfooddetailsscreen1Module { }