import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { SessionService } from 'src/app/service/session/session.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  user;
  constructor(private session:SessionService) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
  }
  isCollapsed = false;
  triggerTemplate: TemplateRef<void> | null = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }
}
