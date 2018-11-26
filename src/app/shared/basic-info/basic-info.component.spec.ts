import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoComponent } from './basic-info.component';
import { MaterialModule } from '../../../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {Directive, Input, Injectable, Component} from '@angular/core';
import {NavigationExtras} from '@angular/router';
import {Router, NavigationEnd} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('BasicInfoComponent', () => {
  let component: BasicInfoComponent;
  let fixture: ComponentFixture<BasicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicInfoComponent ],
      imports: [
        RouterTestingModule.withRoutes([]),
        MaterialModule,
        FlexLayoutModule
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
