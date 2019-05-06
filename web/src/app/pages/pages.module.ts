import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ComponentModule } from '../shared/component/component.module';
import { ModulesModule } from '../modules/modules.module';
import { ZorroModule } from '../shared/lib/zorro-module';
import { Bootstarpmodule } from '../shared/lib/bootstarp-module';

@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentModule,
    ModulesModule,
    ZorroModule,
    Bootstarpmodule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports:[
    PagesComponent
  ]
})
export class PagesModule { }
