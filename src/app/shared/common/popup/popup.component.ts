
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'popup',
    templateUrl: '../popup/popup.component.html',
    styleUrls: ['../popup/popup.component.scss']
})
export class PopupComponent implements OnInit {
    showModal: boolean = false
    constructor () {}

    ngOnInit() {}
    openModal() {
        this.showModal = true;
    }
    closeModal() {
        this.showModal = false;
    }
}