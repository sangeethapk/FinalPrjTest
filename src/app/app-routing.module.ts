import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddcorporatecourseComponent } from './admin/addcorporatecourse/addcorporatecourse.component';
import { AddinstitutionalcourseComponent } from './admin/addinstitutionalcourse/addinstitutionalcourse.component';
import { AddretailcourseComponent } from './admin/addretailcourse/addretailcourse.component';

import { BrochureRequestComponent } from './admin/brochure-request/brochure-request.component';
import { CorporatecourselistComponent } from './admin/corporatecourselist/corporatecourselist.component';
import { CourselistComponent } from './admin/courselist/courselist.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { InstitutionalcourselistComponent } from './admin/institutionalcourselist/institutionalcourselist.component';
import { LoginComponent } from './admin/login/login.component';
import { MainComponent } from './admin/main/main.component';
import { ReportsComponent } from './admin/reports/reports.component';

import { UpdatecorporateComponent } from './admin/updatecorporate/updatecorporate.component';
import { UpdateinstitutionalComponent } from './admin/updateinstitutional/updateinstitutional.component';
import { UpdateretailComponent } from './admin/updateretail/updateretail.component';
import { AuthGuard } from './auth.guard';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';


import { RetailCourseListComponent } from './retail-course-list/retail-course-list.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'coursedetails',component:CoursedetailsComponent},
 {path:'home',component:RetailCourseListComponent},

 
  {path:'retailCourseList',component:CourselistComponent},
  {path:'admin',component:MainComponent,canActivate:[AuthGuard],
  children:[
    {path:'',redirectTo:'dashboard',
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
    path: 'updateRetailCourse', 
    redirectTo: 'updateRetailCourse', 
    pathMatch: 'full'
 },
   {
    path: 'updateRetailCourse',
    component:UpdateretailComponent
 },
  {
    path: 'updateInstitutionalCourse',
    component:UpdateinstitutionalComponent
 },
 {
  path: 'updateCorporateCourse',
  component:UpdatecorporateComponent
},
    
{
  path: 'corporatecourselist',
  component:CorporatecourselistComponent
},
{
  path: 'instituionalcourselist',
  component:InstitutionalcourselistComponent
}
  ]

   },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
