import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndentifiedSubjectEachTermComponent } from './indentified-subject-each-term/indentified-subject-each-term.component';
import { IndentifiedTeacherEachSubjectComponent } from './indentified-teacher-each-subject/indentified-teacher-each-subject.component';
import { IndentifiedInconvenientTimeOfTeacherComponent } from './indentified-inconvenient-time-of-teacher/indentified-inconvenient-time-of-teacher.component';
import { IndentifiedTimetableComponent } from './indentified-timetable/indentified-timetable.component';
import { MasterDataComponent } from './master-data/master-data.component';
import { CourseComponent } from './master-data/course/course.component';
import { GroupManagementComponent } from './master-data/group-management/group-management.component';
import { RoomManagementComponent } from './master-data/room-management/room-management.component';
import { SubjectManagementComponent } from './master-data/subject-management/subject-management.component';
import { UserManagementComponent } from './master-data/user-management/user-management.component';
import { ExportFileComponent } from './export-file/export-file.component';
import { ExportSubjectCurrentTermComponent } from './export-file/export-subject-current-term/export-subject-current-term.component';
import { ExportTimetableOfStudentComponent } from './export-file/export-timetable-of-student/export-timetable-of-student.component';
import { ExportTimetableOfTeacherComponent } from './export-file/export-timetable-of-teacher/export-timetable-of-teacher.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'identified-subject-each-term', component: IndentifiedSubjectEachTermComponent },
  { path: 'identified-teacher-each-subject', component: IndentifiedTeacherEachSubjectComponent },
  { path: 'identified-inconvenient-time-of-teacher', component: IndentifiedInconvenientTimeOfTeacherComponent },
  { path: 'identified-timetable', component: IndentifiedTimetableComponent },
  {
    path: 'master-data', component: MasterDataComponent, children: [
      { path: 'course', component: CourseComponent },
      { path: 'group-management', component: GroupManagementComponent },
      { path: 'room-management', component: RoomManagementComponent },
      { path: 'subject-management', component: SubjectManagementComponent },
      { path: 'user-management', component: UserManagementComponent }
    ]
  },
  {
    path: 'export-file', component: ExportFileComponent, children: [
      { path: 'export-subject-current-term', component: ExportSubjectCurrentTermComponent },
      { path: 'export-timetable-of-student', component: ExportTimetableOfStudentComponent },
      { path: 'export-timetable-of-teacher', component: ExportTimetableOfTeacherComponent }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo:'dashboard' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
