import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

    constructor(private http: HttpClient) {}

    getUser(searchTerm: string) {
        return this.http.get<any>('https://api.github.com/search/users', {params :  new HttpParams().set('q', searchTerm)})
        .map(profileData => {
            return profileData;
        });
    }
}
