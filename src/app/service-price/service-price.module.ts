import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';

import { ServicePriceComponent } from './service-price.component'
import { SharedModule } from '../shared/common/common.module'

@NgModule({
    declarations: [
        ServicePriceComponent
    ],
    imports: [
        BrowserModule,
        SharedModule
    ],
    exports: [
        ServicePriceComponent
    ]
})
export class ServicePriceModule {}