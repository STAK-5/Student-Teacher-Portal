/**
 * Created by syed-muhammad-taha on 8/1/16.
 */

import { Component } from '@angular/core';

import { StpSideBar } from './app.sidebar.component';
import { StpDownloadPanel } from './app.download-panel.component';


@Component({
    selector: 'stp-dashboard',
    templateUrl: 'js/app/templates/app.dashboard.template.html',
    directives: [StpSideBar, StpDownloadPanel]
})

export class StpDashboard {
    files: Object[] = [];

    constructor(){
        this.files = [
            {
                title: 123,
                mime: 12334
            },
            {
                title: 3
            }
        ]
    }

}