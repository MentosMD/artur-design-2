import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';

import { LandingComponent } from './landing.component'
import { SharedModule } from '../shared/common/common.module'

@NgModule({
    declarations: [
        LandingComponent
    ],
    imports: [
        BrowserModule,
        SharedModule
    ],
    exports: [
        LandingComponent
    ],
})
export class LandingModule {}