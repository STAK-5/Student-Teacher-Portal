/**
 * Created by syed-muhammad-taha on 8/7/16.
 */

import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { StpNavBar } from './app.navbar.component';
import {RegistrationUser} from "../interfaces/registration.interface";

@Component({
    selector: 'stp-login-page',
    templateUrl: 'js/app/templates/app.registration-page.template.html',
    directives: [ROUTER_DIRECTIVES, StpNavBar]
})
export class StpRegistrationPage implements OnInit{

    public registrationUser: RegistrationUser;

    constructor() {

    }

    ngOnInit(){
        this.registrationUser = {
            username: '',
            rollno: '',
            email: '',
            password: ''
        };
    }

    register(model: RegistrationUser, isValid: boolean){


        console.log(model, isValid);
    }
}