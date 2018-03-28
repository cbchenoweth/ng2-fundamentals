import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: 'collapsible-well',
    template: `
        <div (click)="toggleContentVisible()" class="well pointable">
            <h4 class="well-title">{{title}}</h4>
            <ng-content *ngIf="contentVisible"></ng-content>
        </div>
    `
})
export class CollapsibleWellComponent implements OnInit {
    @Input() title: string;
    contentVisible = true;

    constructor() {

    }

    ngOnInit(): void {
    }

    toggleContentVisible() {
        this.contentVisible = !this.contentVisible;
    }
}