/**
 * Created by syed-muhammad-taha on 8/6/16.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router'
import { Response } from '@angular/http'

import { StpNavBar } from './app.navbar.component';
import { LoginUser } from "../interfaces/login.interface";
import { LoginService } from "../services/login.service"
@Component({
    selector: 'stp-login-page',
    templateUrl: 'js/app/templates/app.login-page.template.html',
    directives: [ROUTER_DIRECTIVES, StpNavBar],
    providers:[LoginService]
})
export class StpLoginPage implements OnInit{

    public loginUser:LoginUser;

    constructor(private _loginService: LoginService, private _router: Router) {}


    ngOnInit() {
        this.loginUser = {
            id: '',
            password: ''
        };
    }

    login(model, valid:boolean) {
        console.log(model);
        this._loginService.login(model)
            .subscribe((res: Response) => {
                console.log('response: ', res);
                if(res.status === 200){
                    let body = JSON.parse(res._body);
                    console.log('args: ', body.args);
                    window.localStorage.setItem('auth-key', body.args._id);
                    this._router.navigate(['/home']);
                }
            })
    }
}
