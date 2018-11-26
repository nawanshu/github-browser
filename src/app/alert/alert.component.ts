import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  moduleId: module.id,
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

    message: any;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
         this.alertService.getMessage().subscribe(message => { this.message = message; });
     }

}
