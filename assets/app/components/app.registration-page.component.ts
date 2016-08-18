/**
 * Created by syed-muhammad-taha on 8/7/16.
 */

import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { StpNavBar } from './app.navbar.component';
import {RegistrationUser} from "../interfaces/registration.interface";
import {RegistrationService} from '../Services/registration.service';

@Component({
    selector: 'stp-login-page',
    templateUrl: 'js/app/templates/app.registration-page.template.html',
    directives: [ROUTER_DIRECTIVES, StpNavBar],
    providers: [RegistrationService]
})
export class StpRegistrationPage implements OnInit{

    public registrationUser: RegistrationUser;

    constructor(private _registrationService: RegistrationService) {}

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
        this._registrationService.registerUser(model)
            .subscribe(res => {
        if(res.status === 200){
            // redirect to login page => need to watch rc4;            
        } 
});
    }
}