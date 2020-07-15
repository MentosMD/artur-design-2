import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';

import { ShoppingComponent } from './shopping.component'
import { SharedModule } from '../shared/common/common.module'

@NgModule({
    declarations: [
        ShoppingComponent
    ],
    imports: [
        BrowserModule,
        SharedModule
    ],
    exports: [
        ShoppingComponent
    ],
})
export class ShoppingModule {}