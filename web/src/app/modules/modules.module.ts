import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZorroModule } from '../shared/lib/zorro-module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [LoginComponent, SectionComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ZorroModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    LoginComponent,
    SectionComponent
  ]
})
export class ModulesModule { }
