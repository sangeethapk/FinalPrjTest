import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseServiceService } from 'src/app/course-service.service';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-updatecorporate',
  templateUrl: './updatecorporate.component.html',
  styleUrls: ['./updatecorporate.component.css']
})
export class UpdatecorporateComponent implements OnInit {

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





  //---------------------
     
  alert(localStorage.getItem("oldcoursename"));
    const oldcoursename=localStorage.getItem("oldcoursename");
   // alert(oldcoursename);
    
    this.courservice.getCorporateCoursesDeatils(oldcoursename).subscribe((data)=>{
      this.course=JSON.parse(JSON.stringify(data));
      //alert(this.course.name);
      console.log("Inside update corporate :"+this.course);


  });

}
updateCourse(){
this.courservice.updateCorporateCourse(this.course);
 
  this.router.navigate(['../dashboard'],{ relativeTo: this.route });

  

}


}
