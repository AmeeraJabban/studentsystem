import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleRouteComponent } from './simple-route/simple-route.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentEditComponent } from './student-edit/student-edit.component';


const routes: Routes = [
    { path: 'simple', component: SimpleRouteComponent },
    { path: 'studentList', component: StudentListComponent },
    { path: 'student/:studentID', component: StudentEditComponent },
    { path: 'student', component: StudentEditComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
