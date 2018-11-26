import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent } from './signin.component';
import { FormsModule } from '@angular/forms';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { convertToParamMap, ParamMap } from '@angular/router';
import { Injectable } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../auth.service';
import { AlertService } from '../../alert/alert.service';
import { Angulartics2Module } from 'angulartics2';
import { MaterialModule } from '../../../material/material.module';
import { AuthGuard } from '../auth.guard';
import { Observable } from 'rxjs/Observable';
import { setTimeout } from 'timers';
import { Route } from '@angular/router/src/config';
import { Router } from '@angular/router';
import 'rxjs/add/observable/of';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let authService: AuthService;
  let alertService: AlertService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, MaterialModule],
      declarations: [SigninComponent],
      providers: [
        { provide: AuthService, useValue: {
          signinUser: (username: string, password: string) => {},
          signinUserWithPersonalAuth: (token: string) => {},
          logout: () => {},
          monitor: (action, category, label) => {}
        } },
        { provide: AlertService, useValue: {
          error: (message: any, keepAfterNavigationChange = false) => {}
        } }]
    });
  }));

  beforeEach(() => {
    authService = TestBed.get(AuthService);
    alertService = TestBed.get(AlertService);
    router = TestBed.get(Router);
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   it('should create', () => {
      expect(component).toBeTruthy();
   });

   describe('ngOnInit', () => {
     it('should call authService.logout', () => {
       const ngOnInitSpy = spyOn(authService, 'logout');
       component.ngOnInit();
       expect(ngOnInitSpy).toHaveBeenCalledTimes(1);
     });
   });

   describe('toggleTokenAuth', () => {
    it('should toggle hasTokenAuth.logout', () => {
      expect(component.hasTokenAuth).toBeDefined();
      expect(component.hasTokenAuth).toBe(false);

      component.toggleTokenAuth();
      expect(component.hasTokenAuth).toBe(true);

      component.toggleTokenAuth();
      expect(component.hasTokenAuth).toBe(false);
    });
   });

   describe('onSignin', () => {
     it('should call signinUserWithPersonalAuth for token auth with token', (done) => {
       component.model = {
         token: '<<<testtoken>>>',
         username: '<<<username>>>',
         password: '<<<password>>>'
       };
       component.hasTokenAuth = true;
       const signinUserWithPersonalAuthSpy = spyOn(authService, 'signinUserWithPersonalAuth').and.returnValue(Observable.of('a'));
       const monitorSpy = spyOn(authService, 'monitor');
       const navigateSpy = spyOn(router, 'navigate');

       component.onSignin();

       expect(signinUserWithPersonalAuthSpy).toHaveBeenCalledTimes(1);
       expect(signinUserWithPersonalAuthSpy).toHaveBeenCalledWith('<<<testtoken>>>');

       setTimeout(() => {
         expect(monitorSpy).toHaveBeenCalled();
         expect(monitorSpy).toHaveBeenCalledWith('Authentication', 'Token', '');

         expect(navigateSpy).toHaveBeenCalled();
         expect(navigateSpy).toHaveBeenCalledWith(['/home']);
         done();
       }, 0);
      });
    });
});
