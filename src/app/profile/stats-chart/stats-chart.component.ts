import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommitActivityService } from './commit-activity.service';
import { AlertService} from '../../alert/alert.service';
declare let d3: any;

@Component({
  selector: 'app-stats-chart',
  templateUrl: './stats-chart.component.html',
  styleUrls: ['./stats-chart.component.css', '../../../../node_modules/nvd3/build/nv.d3.min.css'],
  encapsulation: ViewEncapsulation.None
})
export class StatsChartComponent implements OnInit {
  options;
  data;
  repos = JSON.parse(sessionStorage.getItem('repoData'));
  selectedUserProfileData = JSON.parse(sessionStorage.getItem('selectedUserProfileData'));
  selectedRepo: any;

  constructor(
    private commitActivityService: CommitActivityService,
    private alertService: AlertService) {
   }

  ngOnInit() {
    this.selectedRepo = this.repos[0];
    this.commitActivities(this.selectedUserProfileData.login, this.selectedRepo.name);
    this.options = {
      chart: {
        type: 'discreteBarChart',
        height: 200,
        margin: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 55
        },
        x: function (d) { return d.label; },
        y: function (d) { return d.value; },
        showValues: true,
        valueFormat: function (d) {
          return d3.format(',.4f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: -10
        }
      }
    };
  }

  commitActivities(username, repoName) {
    this.commitActivityService.getCommitActivities(username, repoName)
      .subscribe(
      data => {
        if (data && Object.keys(data).length !== 0) {
          this.setBarChartData(data[data.length - 1]);
        } else {
          this.data = [
            {
              key: 'Cumulative Return',
              values: [
              ]
            }
          ];
        }
      },
      error => {
        this.alertService.error(error);
      });
  }

  setBarChartData(data: any) {
    this.data = [
      {
        key: 'Cumulative Return',
        values: [
        ]
      }
    ];
    for (let d = 0; d < data.days.length; d++) {
      const weekDay = this.setWeekDayNames(d);
      this.data[0].values.push({
        'label': weekDay,
        'value': data.days[d]
      });
    }
  }

  setWeekDayNames(key) {
    switch (key) {
      case 0:
        return 'Sunday';
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesdsy';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
    }
  }

  onSelect($event) {
    this.commitActivities(this.selectedUserProfileData.login, this.selectedRepo.name);
  }

}
