import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccessfullyscreenpopupscreenComponent } from './successfullyscreenpopupscreen.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgSelectModule,
        FormsModule, ReactiveFormsModule,
        RouterModule.forChild([
            { path: '', component: SuccessfullyscreenpopupscreenComponent },
        ])
    ],
    declarations: [
        SuccessfullyscreenpopupscreenComponent,
    ]
})
export class SuccessfullyscreenpopupscreenModule { }