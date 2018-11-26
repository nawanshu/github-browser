import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';
import { BasicInfoComponent } from '../shared/basic-info/basic-info.component';
import { SearchComponent } from '../home/search/search.component';
import { NavigationExtras } from '@angular/router';
import { SearchService } from '../home/search/search.service';
import { FooterComponent } from '../footer/footer.component';
import { MaterialModule } from '../../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AlertService } from '../alert/alert.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Route } from '@angular/router/src/config';
import { RouterModule, Routes } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, HeaderComponent, BasicInfoComponent, SearchComponent, FooterComponent],
      providers: [
        {
          provide: SearchService, useValue: {
            getUser: (searchTerm: string) => { }
          }
        }, {
          provide: AlertService, useValue: {
            error: (message: any, keepAfterNavigationChange = false) => { }
          }
        }
      ],
      imports: [
        RouterModule,
        MaterialModule,
        RouterTestingModule,
        RouterTestingModule.withRoutes([])
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
