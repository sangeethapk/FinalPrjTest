import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddcorporatecourseComponent } from './admin/addcorporatecourse/addcorporatecourse.component';
import { AddinstitutionalcourseComponent } from './admin/addinstitutionalcourse/addinstitutionalcourse.component';
import { AddretailcourseComponent } from './admin/addretailcourse/addretailcourse.component';

import { BrochureRequestComponent } from './admin/brochure-request/brochure-request.component';
import { CourselistComponent } from './admin/courselist/courselist.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MainComponent } from './admin/main/main.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { UpdateCourseComponent } from './admin/update-course/update-course.component';
import { UpdateRetailCourseComponent } from './admin/update-retail-course/update-retail-course.component';

import { RetailCourseListComponent } from './retail-course-list/retail-course-list.component';


const routes: Routes = [
  {path:'',component:RetailCourseListComponent},
 
  {path:'retailCourseList',component:CourselistComponent},
  {path:'admin',component:MainComponent,
  children:[
    {path:'',redirectTo: 'dashboard',
    pathMatch: 'full' },
    {path:'dashboard',component:DashboardComponent},
    {path:'brochure',component:BrochureRequestComponent},
    {path:'reports',component:ReportsComponent},
    {path:'addretailcourse',component:AddretailcourseComponent},
    {path:'addinstitutionalcourse',component:AddinstitutionalcourseComponent},
    {path:'addcorporatecourse',component:AddcorporatecourseComponent},
    {
      path: 'courselist', 
      redirectTo: 'courselist', 
      pathMatch: 'full'
   },
   {
      path: 'courselist',
      component: CourselistComponent
   },
   {
    path: 'updatecourse', 
    redirectTo: 'updatecourse', 
    pathMatch: 'full'
 },
   {
    path: 'updatecourse',
    component: UpdateCourseComponent
 },
 {
  path: 'updateretailcourse',
  component: UpdateRetailCourseComponent
}
   
  ]

   },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
