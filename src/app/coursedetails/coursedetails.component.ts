import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../course-service.service';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  constructor(private courseservice:CourseServiceService) { }

  course={
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
  };
  ngOnInit(): void {

  let type=  localStorage.getItem("type");
 let  name=  localStorage.getItem("course_name");
if(type==="Retail"){
  this.courseservice.getRetailCoursesDetails(name)
  .subscribe((data:any)=>{
    this.course=JSON.parse(JSON.stringify(data));
  });

}

else if(type==="Institutional")
{
  this.courseservice.getInstitutionalCoursesDeatils(name)
  .subscribe((data:any)=>{
    this.course=JSON.parse(JSON.stringify(data));
  });

}
else{
  this.courseservice.getCorporateCoursesDeatils(name)
  .subscribe((data:any)=>{
    this.course=JSON.parse(JSON.stringify(data));
  });


}

  }

}
