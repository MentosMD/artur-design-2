import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';

import { BusinessCardComponent } from './ business-card.component'
import { SharedModule } from '../shared/common/common.module'

@NgModule({
    declarations: [
        BusinessCardComponent
    ],
    imports: [
        BrowserModule,
        SharedModule
    ],
    exports: [
        BusinessCardComponent
    ],
})
export class BusinessCardModule {}