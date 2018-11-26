import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Router } from '@angular/router';
import {MaterialModule} from '../../material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import {Directive, Input} from '@angular/core';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [MaterialModule, RouterTestingModule]
    });
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // describe('onHeader', () => {
  //   it('should call onHeader', () => {
  //     const navigateSpy = spyOn(router, 'navigate');
  //     component.onHeader();
  //     expect(navigateSpy).toHaveBeenCalledTimes(1);
  //     expect(navigateSpy).toHaveBeenCalledWith(['/home']);
  //    });
  //  });

});
