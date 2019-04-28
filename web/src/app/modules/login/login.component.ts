import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { SessionService } from 'src/app/service/session/session.service';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service:AuthenticationService,
    private session:SessionService,
    private modal:NzModalService
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
      (res)=>{
        const modal = this.modal.success({
          nzTitle:'Login Success!!!'
        })
        setTimeout(()=> modal.destroy(),2000)
        this.session.setActiveUser(res);
      }
    )
  }
}
