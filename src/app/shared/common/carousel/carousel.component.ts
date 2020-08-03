
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'carousel-app',
    templateUrl: '../carousel/carousel.component.html',
    styleUrls: ['../carousel/carousel.component.scss']
})
export class CarouselComponent implements OnInit {
    showNavigationArrows = false;
    constructor (config: NgbCarouselConfig) {}
    ngOnInit() {}
}