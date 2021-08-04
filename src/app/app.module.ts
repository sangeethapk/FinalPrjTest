import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { RetailCourseListComponent } from './retail-course-list/retail-course-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './admin/main/main.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddretailcourseComponent } from './admin/addretailcourse/addretailcourse.component';
import { BrochureRequestComponent } from './admin/brochure-request/brochure-request.component';
import { AddinstitutionalcourseComponent } from './admin/addinstitutionalcourse/addinstitutionalcourse.component';
import { AddcorporatecourseComponent } from './admin/addcorporatecourse/addcorporatecourse.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { ReportsComponent } from './admin/reports/reports.component';
// import { faSun as farSun, faStar as farStar, faMoon as farMoon} from '@fortawesome/free-regular-svg-icons';
// import { faSun as fasSun, faStar as fasStar, faMoon as fasMoon } from '@fortawesome/free-solid-svg-icons';
// import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
// import { faStackOverflow, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

import {MatFormFieldModule} from '@angular/material/form-field';

import {MatSelectModule} from '@angular/material/select';
import { CourselistComponent } from './admin/courselist/courselist.component';

import { InstitutionalcourselistComponent } from './admin/institutionalcourselist/institutionalcourselist.component';
import { CorporatecourselistComponent } from './admin/corporatecourselist/corporatecourselist.component';
import { UpdateretailComponent } from './admin/updateretail/updateretail.component';
import { UpdatecorporateComponent } from './admin/updatecorporate/updatecorporate.component';
import { UpdateinstitutionalComponent } from './admin/updateinstitutional/updateinstitutional.component';
import { LoginComponent } from './admin/login/login.component';


import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

import {MatTabsModule} from '@angular/material/tabs';



import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
     
    RetailCourseListComponent,
    HomeComponent,
    MainComponent,
    DashboardComponent,
    AddretailcourseComponent,
    BrochureRequestComponent,
    AddinstitutionalcourseComponent,
    AddcorporatecourseComponent,
    ReportsComponent,
    CourselistComponent,
    InstitutionalcourselistComponent,
    CorporatecourselistComponent,
    UpdateretailComponent,
    UpdatecorporateComponent,
    UpdateinstitutionalComponent,
    LoginComponent,
    CoursedetailsComponent,
    ConfirmDialogComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule, 
    MatTableModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
