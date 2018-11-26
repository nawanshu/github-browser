import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Angulartics2 } from 'angulartics2';

@Injectable()
export class AuthService {

    constructor(
        private http: HttpClient,
        private angulartics2: Angulartics2) { }

    signinUser(username: string, password: string) {
        if (!username || !password) {
            return;
        }
        return this.http.get<any>('https://api.github.com/user',
        { headers: new HttpHeaders().set('Authorization', 'Basic ' + btoa(username + ':' + password)) })
            .map(userData => {
                if (userData) {
                    // store user details in session storage to keep user logged in between page refreshes
                    sessionStorage.setItem('currentUser', JSON.stringify(userData));
                }
                return userData;
            });
    }

    signinUserWithPersonalAuth(token: string) {
        if (!token) {
            return;
        }
        return this.http.get<any>('https://api.github.com/user',
        { headers: new HttpHeaders().set('Authorization', 'Basic ' + btoa(token)) })
            .map(userData => {
                if (userData) {
                    this.monitor('Authentication', 'URL' , 'https://api.github.com/user');
                    // store user details in session storage to keep user logged in between page refreshes
                    sessionStorage.setItem('currentUser', JSON.stringify(userData));
                }
                return userData;
            });
    }

    logout() {
        // remove user and selected profile from session storage to log user out
        sessionStorage.removeItem('currentUser');
        sessionStorage.removeItem('selectedUserProfile');
        sessionStorage.removeItem('repoData');
    }

    monitor (action, category, label) {
        this.angulartics2.eventTrack.next({
            action: action,
            properties: {
              category: category,
              label: label,
            },
          });
    }
}
