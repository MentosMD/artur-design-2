import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { CarouselComponent } from './carousel/carousel.component'


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        NgbModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        CarouselComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        CarouselComponent
    ]
})
export class SharedModule {}