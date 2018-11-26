import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsChartComponent } from './stats-chart.component';
import { NvD3Module } from 'ng2-nvd3';
import {CommitActivityService} from '../stats-chart/commit-activity.service';

describe('StatsChartComponent', () => {
  let component: StatsChartComponent;
  let fixture: ComponentFixture<StatsChartComponent>;
  const commitActivityServiceStub = '';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsChartComponent ],
      imports: [
        NvD3Module
      ],
      providers: [
        {provide: CommitActivityService, useValue: this.commitActivityServiceStub }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
