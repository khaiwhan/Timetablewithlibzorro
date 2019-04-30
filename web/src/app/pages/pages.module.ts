import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ComponentModule } from '../shared/component/component.module';
import { ModulesModule } from '../modules/modules.module';
import { ZorroModule } from '../shared/lib/zorro-module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndentifiedSubjectEachTermComponent } from './indentified-subject-each-term/indentified-subject-each-term.component';
import { IndentifiedTeacherEachSubjectComponent } from './indentified-teacher-each-subject/indentified-teacher-each-subject.component';
import { IndentifiedInconvenientTimeOfTeacherComponent } from './indentified-inconvenient-time-of-teacher/indentified-inconvenient-time-of-teacher.component';
import { IndentifiedTimetableComponent } from './indentified-timetable/indentified-timetable.component';
import { MasterDataComponent } from './master-data/master-data.component';
import { UserManagementComponent } from './master-data/user-management/user-management.component';
import { GroupManagementComponent } from './master-data/group-management/group-management.component';
import { CourseComponent } from './master-data/course/course.component';
import { SubjectManagementComponent } from './master-data/subject-management/subject-management.component';
import { RoomManagementComponent } from './master-data/room-management/room-management.component';
import { ExportFileComponent } from './export-file/export-file.component';
import { ExportTimetableOfStudentComponent } from './export-file/export-timetable-of-student/export-timetable-of-student.component';
import { ExportTimetableOfTeacherComponent } from './export-file/export-timetable-of-teacher/export-timetable-of-teacher.component';
import { ExportSubjectCurrentTermComponent } from './export-file/export-subject-current-term/export-subject-current-term.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    IndentifiedSubjectEachTermComponent,
    IndentifiedTeacherEachSubjectComponent,
    IndentifiedInconvenientTimeOfTeacherComponent,
    IndentifiedTimetableComponent,
    MasterDataComponent,
    UserManagementComponent,
    GroupManagementComponent,
    CourseComponent,
    SubjectManagementComponent,
    RoomManagementComponent,
    ExportFileComponent,
    ExportTimetableOfStudentComponent,
    ExportTimetableOfTeacherComponent,
    ExportSubjectCurrentTermComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentModule,
    ModulesModule,
    ZorroModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports:[
    PagesComponent
  ]
})
export class PagesModule { }
