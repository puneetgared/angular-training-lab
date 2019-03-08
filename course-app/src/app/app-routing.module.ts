import { CoursesComponent } from './courses/courses.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path : '', component : CoursesComponent},
  {path : 'course/:courseId', component : CoursesComponent},
  {path : 'signup', component : SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
