import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
import { CourseServiceService } from 'src/app/course-service.service';


@Component({
  selector: 'app-addcorporatecourse',
  templateUrl: './addcorporatecourse.component.html',
  styleUrls: ['./addcorporatecourse.component.css']
})
export class AddcorporatecourseComponent implements OnInit {

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
  
  // public tools: object = {
  //   items: [
  //          'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
  //          'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
  //          'LowerCase', 'UpperCase', '|', 'Undo', 'Redo', '|',
  //          'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
  //          'Indent', 'Outdent', '|', 'CreateLink','CreateTable','|',
  //           'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
  //  };
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
        this._courseService.addCorporateCourse(this.course);
        
        
        localStorage.setItem("type","Corporate");
        //this._route.navigate(['corporatecourselist']);
        this._route.navigate(['../corporatecourselist'],{ relativeTo: this.route });

        
  
      
  
    }
  

}
