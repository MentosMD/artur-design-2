import { 
    Directive, ElementRef, Input, 
    AfterViewInit, Renderer2 
} from '@angular/core'

@Directive({
    selector: '[popup-show]'
})
export class PopupDirective implements AfterViewInit {
    @Input() show: boolean;

    constructor(private renderer: Renderer2, private el: ElementRef) {}
    ngAfterViewInit() {
        this.renderer.setStyle(this.el.nativeElement, 'display', this.show ? 'block' : 'none');
    }
}