import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseServiceService } from 'src/app/course-service.service';

@Component({
  selector: 'app-institutionalcourselist',
  templateUrl: './institutionalcourselist.component.html',
  styleUrls: ['./institutionalcourselist.component.css']
})
export class InstitutionalcourselistComponent implements OnInit {

  
  data=[{
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
   
      console.log("Inside Institutional course list:"+this.t);
      this._courseService.getInstitutionalCourses().subscribe((data:any)=>{
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
  
  localStorage.setItem("oldcoursename",name); 


  
    this._router.navigate(['../updateCorporateCourse'],{ relativeTo: this.route });

  
  
  
 }

  

}
