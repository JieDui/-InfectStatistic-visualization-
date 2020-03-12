import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-head',
    templateUrl: './head.component.html',
    styleUrls: ['./head.component.scss'],
})
export class HeadComponent implements OnInit {

    public infected = 80933;
    public cured = 60114;

    constructor() {
    }

    ngOnInit() {
    }
}
