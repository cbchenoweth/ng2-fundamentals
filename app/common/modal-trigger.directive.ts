import {Directive, ElementRef, Inject, OnInit} from "@angular/core";
import {JQUERY_TOKEN} from "./jQuery.service";

@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit{
    private el: HTMLElement;

    constructor(elRef: ElementRef, @Inject(JQUERY_TOKEN) private jQuery : any) {
        this.el = elRef.nativeElement;
    }

    ngOnInit(): void {
        this.el.addEventListener('click', event => {
            this.jQuery('#simple-modal').modal({});
        });
    }

}