import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CommitActivityService {

    constructor(private http: HttpClient) {}

    getCommitActivities(username: string, repoName: string) {
        return this.http.get<any>('https://api.github.com/repos/' + username + '/' + repoName + '/' + 'stats/commit_activity')
        .map(user => {
            return user;
        });
    }
}
