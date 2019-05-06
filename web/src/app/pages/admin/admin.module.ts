import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IdentifiedSubjectEachTermComponent } from './identified-subject-each-term/identified-subject-each-term.component';
import { IdentifiedTeacherEachSubjectComponent } from './identified-teacher-each-subject/identified-teacher-each-subject.component';
import { IdentifiedInconvenientTimeOfTeacherComponent } from './identified-inconvenient-time-of-teacher/identified-inconvenient-time-of-teacher.component';
import { IdentifiedTimetableComponent } from './identified-timetable/identified-timetable.component';
import { MasterDataComponent } from './master-data/master-data.component';
import { UserManagementComponent } from './master-data/user-management/user-management.component';
import { GroupManagementComponent } from './master-data/group-management/group-management.component';
import { CourseComponent } from './master-data/course/course.component';
import { SubjectManagementComponent } from './master-data/subject-management/subject-management.component';
import { RoomManagementComponent } from './master-data/room-management/room-management.component';
import { ModulesModule } from 'src/app/modules/modules.module';
import { ZorroModule } from 'src/app/shared/lib/zorro-module';
import { Bootstarpmodule } from 'src/app/shared/lib/bootstarp-module';
import { ComponentModule } from 'src/app/shared/component/component.module';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    IdentifiedSubjectEachTermComponent,
    IdentifiedTeacherEachSubjectComponent,
    IdentifiedInconvenientTimeOfTeacherComponent,
    IdentifiedTimetableComponent,
    MasterDataComponent,
    UserManagementComponent,
    GroupManagementComponent,
    CourseComponent,
    SubjectManagementComponent,
    RoomManagementComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ComponentModule,
    ModulesModule,
    ZorroModule,
    Bootstarpmodule
  ]
})
export class AdminModule { }
