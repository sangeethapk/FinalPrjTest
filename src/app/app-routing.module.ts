import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { AdminComponent } from './admin/admin.component';
import { Course1Component } from './course1/course1.component';
import { RetailComponent } from './retail/retail.component';

const routes: Routes = [
  {path:'',component:RetailComponent},
  {path:'admin',component:AdminComponent},
  {path:'admin/add-course',component:AddCourseComponent},
  {path:'course1',component:Course1Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
