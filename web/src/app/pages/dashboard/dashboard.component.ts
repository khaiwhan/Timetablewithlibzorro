import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/service/session/session.service';
import { DashboardService } from 'src/app/service/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  USERS;
  detailsUser;
  sectionDetail;
  constructor(
    private session:SessionService,
    private service:DashboardService
  ) { }

  ngOnInit() {
    this.USERS = this.session.getActiveUser();
    this.service.getuser(this.USERS.FIRSTNAME).subscribe(
      (res) => {
        this.detailsUser = res;
      }
    )
    this.service.getsection(this.USERS.DEPARTMENT).subscribe(
      (res) => {
        this.sectionDetail = res;
      }
    )
  }

}
