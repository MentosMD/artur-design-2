import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component'
import { SharedModule } from '../shared/common/common.module'


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        BrowserModule,
        SharedModule
    ],
    exports: [
        HomeComponent
    ],
})
export class HomeModule {}