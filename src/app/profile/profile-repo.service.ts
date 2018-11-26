import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileRepoService {

    constructor(private http: HttpClient) {}

    getRepo(username: string) {
        return this.http.get<any>('https://api.github.com/users/' + username + '/repos')
        .map(user => {
            return user;
        });
    }
}
