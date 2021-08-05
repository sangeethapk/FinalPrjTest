import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseServiceService } from 'src/app/course-service.service';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-addretailcourse',
  templateUrl: './addretailcourse.component.html',
  styleUrls: ['./addretailcourse.component.css']
})
export class AddretailcourseComponent implements OnInit {

  editor = ClassicEditorBuild;
   ckeConfig: any;
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
        this._courseService.addRetailCourse(this.course);
      
        localStorage.setItem("type","Retail")
        
       // this._route.navigate(['courselist']);
       this._route.navigate(['../courselist'],{ relativeTo: this.route });
  
      
  
    }
  

}
