import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';

import { PortfolioComponent } from './portfolio.component'
import { SharedModule } from '../shared/common/common.module'

@NgModule({
    declarations: [
        PortfolioComponent
    ],
    imports: [
        BrowserModule,
        SharedModule
    ],
    exports: [
        PortfolioComponent
    ],
})
export class PortfolioModule {}