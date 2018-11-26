import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NvD3Module } from 'ng2-nvd3';
import { RouterModule, Routes } from '@angular/router';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import 'd3';
import 'nvd3';

import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BasicInfoComponent } from './shared/basic-info/basic-info.component';
import { StatsChartComponent } from './profile/stats-chart/stats-chart.component';
import { SearchComponent } from './home/search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { AlertComponent } from './alert/alert.component';
import {AlertService} from './alert/alert.service';
import { SearchService } from './home/search/search.service';
import { ProfileRepoService } from './profile/profile-repo.service';
import { CommitActivityService } from './profile/stats-chart/commit-activity.service';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    BasicInfoComponent,
    StatsChartComponent,
    SearchComponent,
    AlertComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule,
    NvD3Module,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [AuthGuard, AlertService, AuthService, SearchService, ProfileRepoService, CommitActivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
