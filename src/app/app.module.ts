import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RetailComponent } from './retail/retail.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddCourseComponent } from './add-course/add-course.component';
import { Course1Component } from './course1/course1.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
// import { faSun as farSun, faStar as farStar, faMoon as farMoon} from '@fortawesome/free-regular-svg-icons';
// import { faSun as fasSun, faStar as fasStar, faMoon as fasMoon } from '@fortawesome/free-solid-svg-icons';
// import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
// import { faStackOverflow, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';


@NgModule({
  declarations: [
    AppComponent,
    RetailComponent,
    AdminComponent,
    AddCourseComponent,
    Course1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    FontAwesomeModule,
    RichTextEditorAllModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
