import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';

import { MobileComponent } from './mobile.component'
import { SharedModule } from '../shared/common/common.module'


@NgModule({
    declarations: [
        MobileComponent
    ],
    imports: [
        BrowserModule,
        SharedModule
    ],
    exports: [
        MobileComponent
    ],
})
export class MobileModule {}