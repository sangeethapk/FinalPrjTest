import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseServiceService } from 'src/app/course-service.service';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-updateretail',
  templateUrl: './updateretail.component.html',
  styleUrls: ['./updateretail.component.css']
})
export class UpdateretailComponent implements OnInit {


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
  public tools: object = {
    items: [
           'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
           'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
           'LowerCase', 'UpperCase', '|', 'Undo', 'Redo', '|',
           'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
           'Indent', 'Outdent', '|', 'CreateLink','CreateTable','|',
            'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
   };

  constructor(private courservice:CourseServiceService,private router:Router,private route:ActivatedRoute) { }

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



  //----------------
 // alert(localStorage.getItem("oldcoursename"));
    const oldcoursename=localStorage.getItem("oldcoursename");
   // alert(oldcoursename);
    
    this.courservice.getRetailCoursesDetails(oldcoursename).subscribe((data)=>{
      this.course=JSON.parse(JSON.stringify(data));
     // alert(this.course.name);
      console.log("Inside update retail :"+this.course);


  });

}
updateCourse(){
this.courservice.updateRetailCourse(this.course);
  this.router.navigate(['courselist']) ;this.router.navigate(['../dashboard'],{ relativeTo: this.route });

  

}

}
