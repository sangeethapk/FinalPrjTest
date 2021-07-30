import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService } from 'src/app/course-service.service';


@Component({
  selector: 'app-addretailcourse',
  templateUrl: './addretailcourse.component.html',
  styleUrls: ['./addretailcourse.component.css']
})
export class AddretailcourseComponent implements OnInit {

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
  
  public tools: object = {
    items: [
           'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
           'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
           'LowerCase', 'UpperCase', '|', 'Undo', 'Redo', '|',
           'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
           'Indent', 'Outdent', '|', 'CreateLink','CreateTable','|',
            'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
   };
    constructor(private _courseService:CourseServiceService,private _route:Router) { }
  
    ngOnInit(): void {
    }
    addCourse(){
  console.log("On click");
      
     
  
        console.log("Add coures"+this.course.name);
        this._courseService.addRetailCourse(this.course);
        localStorage.setItem("type","Retail")
        
        this._route.navigate(['retailCourseList']);
        
  
      
  
    }
  

}
