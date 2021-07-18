import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../course-service.service';


@Component({
  selector: 'app-course1',
  templateUrl: './course1.component.html',
  styleUrls: ['./course1.component.css']
})
export class Course1Component implements OnInit {


  data=[{
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
  }]
  constructor(private _courseService:CourseServiceService) { }

  ngOnInit(): void {

    console.log("Course 1: Detaila")
    this._courseService.getRetailCourseDetails().subscribe((datanew: any) =>{
      console.log(datanew[0].name);
      this.data=datanew;

  });

}
}
