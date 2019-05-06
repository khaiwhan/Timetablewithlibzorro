import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../modules/login/login.component';
import { SectionComponent } from '../modules/section/section.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'section', component: SectionComponent },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
