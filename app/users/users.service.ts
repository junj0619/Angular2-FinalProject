import {Http} from '@angular/http'
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {User} from './user.interface';

@Injectable()
export class UsersService {

    url = "https://jsonplaceholder.typicode.com/users";

    constructor(private _http: Http) {

    }

    GetUsers(): Observable<User[]> {
        return this._http.get(this.url)
            .map(response => response.json());
    }

    addUser(user: User) {
        return this._http.post(this.url, JSON.stringify(user))
            .map(response => response.json());
    }

    getUserById(id) {
        return this._http.get(this.getUserUrl(id))
            .map(response => response.json());
    }

    updateUser(id, user: User) {
        return this._http.put(this.getUserUrl(id), JSON.stringify(user))
            .map(response => response.json());
    }

    deleteUser(userId) {
        return this._http.delete(this.getUserUrl(userId)).map(response => response.json());
    }

    private getUserUrl(userId) {
        return this.url + "/" + userId;
    }
}