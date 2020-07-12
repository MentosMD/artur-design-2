import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/common/common.module'
import { HomeModule } from './home/home.module'
import { ServicePriceModule } from './service-price/service-price.module'
import { PortfolioModule } from './portfolio/portfolio.module'
import { LandingModule } from './landing/landing.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    ServicePriceModule,
    PortfolioModule,
    LandingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
