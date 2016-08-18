import { Injectable } from '@angular/core';
import { CanDeactivate, CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
@Injectable()

export class AuthManager implements CanActivate{
    
    constructor(private _router: Router){}
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(next.url[0].path == 'login'){
            if(window.localStorage.getItem('auth-key')){
                this._router.navigate(['/home']);
                return false;
            } else return true; 
        
        }
        
        if( window.localStorage.getItem('auth-key') )
            return true;
        
        this._router.navigate(['/']);
        return false;
    }
}