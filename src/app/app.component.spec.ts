import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Router, NavigationEnd} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {AlertComponent} from './alert/alert.component';
import { Component, Directive, Input, Injectable } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { AlertService } from './alert/alert.service';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';


const alertServiceStub = '';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, AlertComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        MaterialModule,
        FlexLayoutModule,
        Angulartics2Module.forRoot([Angulartics2GoogleAnalytics])
      ],
      providers: [{provide: AlertService, useValue: this.alertServiceStub }]
    });
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
