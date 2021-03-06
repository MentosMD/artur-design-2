import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { ServicePriceComponent } from './service-price/service-price.component'
import { PortfolioComponent } from './portfolio/portfolio.component'
import { LandingComponent } from './landing/landing.component'
import { ShoppingComponent } from './shopping/shopping.component'
import { BusinessCardComponent } from './business-card/ business-card.component'

import { MobileComponent } from './mobile-development/mobile.component'

const SCREEN = window.screen.width > 767 ? HomeComponent : MobileComponent

const routes: Routes = [
  {
    path: '',
    component: SCREEN
  },
  {
    path: 'services',
    component: ServicePriceComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'services/landing',
    component: LandingComponent
  },
  {
    path: 'services/shopping',
    component: ShoppingComponent
  },
  {
    path: 'services/business-card',
    component: BusinessCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
