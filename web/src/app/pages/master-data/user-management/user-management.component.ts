import { Component, OnInit } from '@angular/core';
import { UserManagementService } from 'src/app/service/user-management/user-management.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  userData;
  constructor(private service:UserManagementService) { }

  ngOnInit() {
    this.service.getData().subscribe(
      (res) => {
        this.userData = res;
      }
    )
  }

}
