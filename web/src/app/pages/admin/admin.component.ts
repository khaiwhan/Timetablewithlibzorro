import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/service/session/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  USER;
  constructor(
    private session:SessionService,
    private route:Router
  ) { }

  ngOnInit() {
    this.USER = this.session.getActiveUser();
    if(this.USER == null){this.route.navigate([''])}
    else
    {
      if(this.USER.ADMIN !== "Y"){this.route.navigate([''])}
    }
  }

}
