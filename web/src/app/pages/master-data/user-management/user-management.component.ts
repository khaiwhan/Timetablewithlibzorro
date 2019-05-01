import { Component, OnInit } from '@angular/core';
import { UserManagementService } from 'src/app/service/user-management/user-management.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  userData;
  isVisible = false;
  constructor(private service: UserManagementService) { }

  ngOnInit() {
    this.service.getData().subscribe(
      (res) => {
        this.userData = res;
      }
    )
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}
