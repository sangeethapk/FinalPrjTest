import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService } from '../course-service.service';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
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
    
    if(this.course.category=="Retail"){

      console.log("Add coures"+this.course.name);
      this._courseService.addRetailCourse(this.course);
      
      this._route.navigate(['retailCourseList']);
      

    }

  }

}
