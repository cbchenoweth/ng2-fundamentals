import {Component, ElementRef, Inject, Input, OnInit, ViewChild} from "@angular/core";
import {JQUERY_TOKEN} from "./jQuery.service";

@Component({
    selector: 'simple-modal',
    template: `
        <div id="{{elementId}}" #modalcontainer class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                        <h4 class="modal-title">{{title}}</h4>
                    </div>
                    
                    <div class="modal-body" (click)="closeModal()">
                        <ng-content></ng-content>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            .modal-body {max-height: 250px; overflow-y: scroll;}
        `
    ]
})
export class SimpleModalComponent implements OnInit {
    @Input() title: string;
    @Input() elementId: string;
    @ViewChild('modalcontainer') containerElRef: ElementRef;

    constructor(@Inject(JQUERY_TOKEN) private jQuery: any) {

    }

    ngOnInit(): void {
    }

    closeModal() {
        this.jQuery(this.containerElRef.nativeElement).modal('hide');

        // this also would have worked, and not needed the "View Child"
        // this.jQuery(`#${this.elementId}`).modal('hide');
    }
}