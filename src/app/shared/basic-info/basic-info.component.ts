import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {
  public profileInfo: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const path = this.route.routeConfig.path;
    this.profileInfo = JSON.parse(
      sessionStorage.getItem(path === 'home' ? 'currentUser' : path === 'profile' ? 'selectedUserProfileData' : ''));
  }

}
