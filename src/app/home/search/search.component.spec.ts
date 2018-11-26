import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { MaterialModule } from '../../../material/material.module';
import { SearchService } from './search.service';
import { AlertService } from '../../alert/alert.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [MaterialModule, RouterTestingModule],
      providers: [
        { provide: SearchService, useValue: {
          getUser: (searchTerm: string) => {}
        }}, { provide: AlertService, useValue: {
          error: (message: any, keepAfterNavigationChange = false) => {}
        } }]
    });
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onProfileClick', () => {
    it('should call onProfileClick', () => {
      const navigateSpy = spyOn(router, 'navigate');
      const sessionStorageSpy = spyOn(sessionStorage, 'setItem').and.callFake(() => { });
      component.onProfileClick('<<<selectedUserProfileData>>>');
      expect(sessionStorageSpy).toHaveBeenCalledWith('selectedUserProfileData', '"<<<selectedUserProfileData>>>"');
      expect(navigateSpy).toHaveBeenCalledWith(['/profile']);
    });
   });
});
