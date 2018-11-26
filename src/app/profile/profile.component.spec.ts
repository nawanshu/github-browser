import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import {HeaderComponent} from '../header/header.component';
import {BasicInfoComponent} from '../shared/basic-info/basic-info.component';
import {StatsChartComponent} from './stats-chart/stats-chart.component';
import {Router, NavigationEnd} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {Directive, Input, Component, Injectable} from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NvD3Module } from 'ng2-nvd3';
import { RouterModule, Routes } from '@angular/router';
import {ProfileRepoService} from './profile-repo.service';
import {CommitActivityService} from './stats-chart/commit-activity.service';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  const profileRepoServiceStub = '';
  const commitActivityServiceStub = '';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent, HeaderComponent, BasicInfoComponent, StatsChartComponent ],
      imports: [
        RouterTestingModule,
        NvD3Module
      ],
      providers: [
        {provide: ProfileRepoService, useValue: this.profileRepoServiceStub },
        {provide: CommitActivityService, useValue: this.commitActivityServiceStub }
      ],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
