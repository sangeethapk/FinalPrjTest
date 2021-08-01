import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseServiceService } from 'src/app/course-service.service';

@Component({
  selector: 'app-updatecorporate',
  templateUrl: './updatecorporate.component.html',
  styleUrls: ['./updatecorporate.component.css']
})
export class UpdatecorporateComponent implements OnInit {

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

  constructor(private courservice:CourseServiceService,private router:Router,private route:ActivatedRoute) { }

ngOnInit(): void {
     
  alert(localStorage.getItem("oldcoursename"));
    const oldcoursename=localStorage.getItem("oldcoursename");
   // alert(oldcoursename);
    
    this.courservice.getCorporateCoursesDeatils(oldcoursename).subscribe((data)=>{
      this.course=JSON.parse(JSON.stringify(data));
      alert(this.course.name);
      console.log("Inside update corporate :"+this.course);


  });

}
updateCourse(){
this.courservice.updateCorporateCourse(this.course);
 
  this.router.navigate(['../dashboard'],{ relativeTo: this.route });

  

}


}
