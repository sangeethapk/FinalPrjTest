import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseServiceService } from 'src/app/course-service.service';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-addinstitutionalcourse',
  templateUrl: './addinstitutionalcourse.component.html',
  styleUrls: ['./addinstitutionalcourse.component.css']
})
export class AddinstitutionalcourseComponent implements OnInit {

  editor = ClassicEditorBuild;
   ckeConfig: any;
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
  
  
    constructor(private _courseService:CourseServiceService,private _route:Router,private route:ActivatedRoute) { }
  
    ngOnInit(): void {

      this.ckeConfig = {
        toolbar: {
          items: ['heading', '|', 'bold', 'italic', '|', 'bulletedList',
            'numberedList', '|', 'insertTable', '|', 'undo', 'redo', 'imageUpload',
            ' classicEditor', 'blockQuote', 'list', 'mediaEmbed', 'pasteFromOffice',
            'fontFamily', 'todoList', 'youtube'
          ]
        },
        table: {
          contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
        },
      };

    }
    addCourse(){
  console.log("On click");
      
     
  
        console.log("Add coures"+this.course.name);
        this._courseService.addInstitutionalCourse(this.course);
        
        localStorage.setItem("type","Institutional")
      //  this._route.navigate(['instituionalcourselist']);
        
      this._route.navigate(['../instituionalcourselist'],{ relativeTo: this.route });
      
  
    }
  

  


}
