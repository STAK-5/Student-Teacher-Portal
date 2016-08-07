/**
 * Created by syed-muhammad-taha on 8/6/16.
 */

import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'

import { StpNavBar } from './app.navbar.component';
import { LoginUser } from "../interfaces/login.interface";

@Component({
    selector: 'stp-login-page',
    templateUrl: 'js/app/templates/app.login-page.template.html',
    directives: [ROUTER_DIRECTIVES, StpNavBar]
})
export class StpLoginPage implements OnInit{

    public loginUser:LoginUser;

    constructor() {

    }


    ngOnInit() {
        this.loginUser = {
            id: '',
            password: ''
        };
    }

    login(model, valid:boolean) {
        console.log(model, valid);
    }
}