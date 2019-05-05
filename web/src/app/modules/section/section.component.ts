import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { FormControl } from '@angular/forms';
import { SessionService } from 'src/app/service/session/session.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  USER;
  Facultys;
  FacultyValue = null;
  Departments;
  DepartmentValue = null;
  public FacultyForm = new FormControl('')
  public DepartmentForm = new FormControl('')
  constructor(
    private authentication:AuthenticationService,
    private session:SessionService
  ) { }

  ngOnInit() {
    this.USER = this.session.getActiveUser();
    this.authentication.getFaculty().subscribe(
      (res) => {
        this.Facultys = res;
      }
    )
  }
  setDepartment(){
    this.authentication.getDepartment(this.FacultyForm.value).subscribe(
      (res) => {
        this.Departments = res;
      }
    )
  }
  setSection(){
    this.authentication.section(this.DepartmentForm.value).subscribe(
      (res) => {
        const data = {
          FIRSTNAME:this.USER.FIRSTNAME,
          LASTNAME:this.USER.LASTNAME,
          FACULTY:res[0].FACULTY_NAME,
          DEPARTMENT:res[0].DEPARTMENT_NAME
        }
        this.session.setActiveUser(data);
        window.history.go(0);
      }
    )
  }
}
