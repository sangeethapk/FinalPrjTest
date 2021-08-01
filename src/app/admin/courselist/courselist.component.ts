import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { CourseServiceService } from 'src/app/course-service.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
 count=0;


  data=[{
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
    test:'',
    courseFee:'',
    refundPolicy:'',
    importantDates:'',
    img1:'',
    img2:'',
    questionPaperLink:'',
    status:''
  }];
 
t:any;
  constructor(private _courseService:CourseServiceService,private _router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

  let  type=localStorage.getItem("type");
  
this.t=type;
   

     console.log("Retail course list : "+this.t);
    this._courseService.getRetailCourses().subscribe((data:any)=>{
      this.data=JSON.parse(JSON.stringify(data));
    });
   
   }


   deleteCourse(name:any){
      
   
  this._courseService.deleteCourse(name)
    .subscribe((data) => {
      this.data = this.data.filter(b => b !== name);
      //this.books = JSON.parse(JSON.stringify(data));
      
    });

}


editCourse(name:any){
  
 // alert("editCoursefunction"+name);
  localStorage.setItem("oldcoursename",name); 

alert(localStorage.getItem("oldcoursename"));

 
    this._router.navigate(['../updateRetailCourse'],{ relativeTo: this.route });
  
 }

  
}
