import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService } from 'src/app/course-service.service';

@Component({
  selector: 'app-update-retail-course',
  templateUrl: './update-retail-course.component.html',
  styleUrls: ['./update-retail-course.component.css']
})
export class UpdateRetailCourseComponent implements OnInit {

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
    age:'',
    test:'',
    courseFee:'',
    refundPolicy:'',
    importantDates:'',
    img1:'',
    img2:'',
    questionPaperLink:'',
    status:'',
    brochureTitle:''
  }

  constructor(private courservice:CourseServiceService,private router:Router) { }

  ngOnInit(): void {
     

    const name=localStorage.getItem("oldcoursename");
    //this.bookService.updateBook(title);
    this.courservice.getRetailCoursesDetails(name).subscribe((data)=>{
      this.course=JSON.parse(JSON.stringify(data));


  });

}
updateAuthor(){
 this.courservice.updateRetailCourse(this.course);
  this.router.navigate(['retailcourselist']) ;

  

}

}

