import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-component',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

    public message: string;

    constructor() {
        this.message = 'home.component';
    }

    ngOnInit() {
        console.log('ngOnInit HomeComponent');
    }
}

