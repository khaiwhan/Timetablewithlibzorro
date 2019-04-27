import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { ZorroModule } from '../lib/zorro-module';


@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    ZorroModule
  ],
  exports:[
    NavComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentModule { }
