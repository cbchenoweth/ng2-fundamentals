import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'collapsible-well',
    template: `
        <div (click)="toggleContentVisible()" class="well pointable">
            <h4>
                <ng-content select="[collapsible-well-title]"></ng-content>
            </h4>
            <ng-content *ngIf="contentVisible" select="[collapsible-well-body]"></ng-content>
        </div>
    `
})
export class CollapsibleWellComponent implements OnInit {
    contentVisible = true;

    constructor() {

    }

    ngOnInit(): void {
    }

    toggleContentVisible() {
        this.contentVisible = !this.contentVisible;
    }
}