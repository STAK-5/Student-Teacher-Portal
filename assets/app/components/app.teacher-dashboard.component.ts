/**
 * Created by syed-muhammad-taha on 8/7/16.
 */


import { Component } from '@angular/core';

import { StpSideBar } from './app.sidebar.component';
import { StpFileUpload } from './app.file-upload.component';


@Component({
    selector: 'stp-dashboard',
    templateUrl: 'js/app/templates/app.teacher-dashboard.template.html',
    directives: [StpSideBar, StpFileUpload]
})

export class StpTeacherDashboard {

    constructor(){

    }

}