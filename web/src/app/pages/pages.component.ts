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
  STATUS_SECTION:boolean
  menus;
  constructor(
    private session:SessionService
    ) { }

  ngOnInit() {
    
  }

}
