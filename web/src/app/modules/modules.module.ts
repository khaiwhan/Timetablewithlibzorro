import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZorroModule } from '../shared/lib/zorro-module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ZorroModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    LoginComponent
  ]
})
export class ModulesModule { }
