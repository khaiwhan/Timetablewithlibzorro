import { Component, OnInit } from '@angular/core';
import { SessionService } from '../service/session/session.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  USER;
  STATUS_LOGIN:boolean
  menus;
  constructor(
    private session:SessionService
    ) { }

  ngOnInit() {
    this.USER = this.session.getActiveUser();
    this.USER == null ? this.STATUS_LOGIN = true : this.STATUS_LOGIN = false
  }

}
