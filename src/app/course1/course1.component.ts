import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService } from '../course-service.service';


@Component({
  selector: 'app-course1',
  templateUrl: './course1.component.html',
  styleUrls: ['./course1.component.css']
})
export class Course1Component implements OnInit {


  data={
    name:'',
    category:'',
    about:'',
    objective:'',
    sponserimage:'',
    knowledgeParterimage:'',
    internshipPartnerimage:'',
    courseDelivery:'',
    agenda:'',
    highlights:'',
    eligibility:'',
    test:'',
    courseFee:'',
    refundPolicy:'',
    importantDates:'',
    img1:'',
    img2:'',
    questionPaperLink:'',
    status:''
  }
  applicant={
  
    name:'',
    phone:'',
    email:'',
    employed:'',
    qualification:'',
    messsage:''
  };
  course_name:any;
  
  constructor(private _courseService:CourseServiceService,private _router:Router) {console.log("test constructor") }

  ngOnInit(): void {
     

    this.course_name=localStorage.getItem("course_name");
    console.log("Course 1: Details----"+this.course_name);
    this._courseService.getRetailCoursesDetails(this.course_name).subscribe((datanew: any) =>{
      console.log(datanew.name);
      this.data=datanew;

  });
  }





  // ------------------------------------------------------------------------------------



  
  

}
