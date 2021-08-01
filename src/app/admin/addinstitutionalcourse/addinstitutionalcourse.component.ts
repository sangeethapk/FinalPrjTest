import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService } from 'src/app/course-service.service';

@Component({
  selector: 'app-addinstitutionalcourse',
  templateUrl: './addinstitutionalcourse.component.html',
  styleUrls: ['./addinstitutionalcourse.component.css']
})
export class AddinstitutionalcourseComponent implements OnInit {

  
  course={
    name:'',
   
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
        this._courseService.addInstitutionalCourse(this.course);
        
        localStorage.setItem("type","Institutional")
        this._route.navigate(['instituionalcourselist']);
        
  
      
  
    }
  

  


}
