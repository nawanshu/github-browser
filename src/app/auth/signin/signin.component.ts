import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../auth.service';
import { AlertService } from '../../alert/alert.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  model: any = {};
  loading = false;
  hasTokenAuth = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService) {
    }

  ngOnInit() {
    // reset login status
    this.authService.logout();
  }

  onSignin() {
    this.loading = true;
    if (this.hasTokenAuth) {
      this.authService.signinUserWithPersonalAuth(this.model.token)
        .subscribe(
        data => {
          this.authService.monitor('Authentication', 'Token' , '');
          this.router.navigate(['/home']);

        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
    } else {
      this.authService.signinUser(this.model.username, this.model.password)
        .subscribe(
        data => {
          this.authService.monitor('Authentication', 'Username/Password' , '');
          this.router.navigate(['/home']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
    }
  }

  toggleTokenAuth() {
    this.hasTokenAuth = !this.hasTokenAuth;
  }
}
