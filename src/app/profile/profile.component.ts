import { Component, OnInit } from '@angular/core';
import { ProfileRepoService } from './profile-repo.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  selectedProfileData = JSON.parse(sessionStorage.getItem('selectedUserProfileData'));
  public repositories: any;
  public loading: boolean;

  constructor(
    private profileRepoService: ProfileRepoService,
    private alertService: AlertService) {}

  ngOnInit() {
    this.loading = true;
    this.onProfileSearch(this.selectedProfileData);
  }

  onProfileSearch(userData: any) {
    this.profileRepoService.getRepo(userData.login)
      .subscribe(
        data => {
          this.repositories = data;
          sessionStorage.setItem('repoData', JSON.stringify(this.repositories));
          this.loading = false;
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
