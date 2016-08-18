import {Http, Headers} from '@angular/http'
import {Injectable} from '@angular/core'
import {LoginUser} from '../interfaces/login.interface'
@Injectable()

export class LoginService {
    constructor(private _http: Http){}
    
    login(user: LoginUser){
        var ContentType = new Headers({'Content-Type':'application/json'})
        return this._http.post('/users/login', user, ContentType);
    }
}