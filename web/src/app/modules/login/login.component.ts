import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { SessionService } from 'src/app/service/session/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;
  USER;
  constructor(
    private fb: FormBuilder,
    private service: AuthenticationService,
    private session: SessionService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty(); //message
      this.validateForm.controls[i].updateValueAndValidity();//box red
    }
    this.service.login(this.validateForm.value).subscribe(
      (res) => {
        this.USER = res;
        if (this.USER.ADMIN === "Y") { this.route.navigate(['/section']) }
        else
        {
          if(this.USER.STATUS === "T"){this.route.navigate(['/teacher'])}
          if(this.USER.STATUS === "S"){this.route.navigate(['/student'])}
        }
        this.session.setActiveUser(res);
      }
    )
  }
}
