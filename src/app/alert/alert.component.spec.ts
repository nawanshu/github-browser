import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from '../../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AlertComponent } from './alert.component';
import { AlertService } from './alert.service';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;
  let alertService: AlertService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertComponent ],
      providers: [{provide: AlertService, useValue: {
        success: (message: string, keepAfterNavigationChange = false) => {},
        error: (message: any, keepAfterNavigationChange = false) => {},
        clear: () => {},
        getMessage: () => {}
      } }],
      imports: [
        MaterialModule,
        FlexLayoutModule
      ]
    });
  }));

  beforeEach(() => {
    alertService = TestBed.get(AlertService);
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call authService.logout', () => {
      const ngOnInitSpy = spyOn(alertService, 'getMessage').and.returnValue(Observable.of('a'));
      component.ngOnInit();
      expect(ngOnInitSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('ngOnInit', () => {
    it('should call authService.logout', () => {
      const ngOnInitSpy = spyOn(alertService, 'getMessage').and.returnValue(Observable.of('a'));
      component.ngOnInit();
      expect(ngOnInitSpy).toHaveBeenCalledTimes(1);
    });
  });
});
