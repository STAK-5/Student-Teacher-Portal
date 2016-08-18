import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {RegistrationUser} from '../interfaces/registration.interface';
import {Observable} from 'rxjs/rx';
@Injectable()

export class RegistrationService{
    constructor(private _http: Http){}
    public registerUser(user: RegistrationUser){
        console.info('registration function invoked');
        const contentType = new Headers({'Content-Type': 'application/json'});
        return this._http.post('/users/registration', user, {headers: contentType});
            // .map(res=> res.json());
    }
}