import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseServiceService } from 'src/app/course-service.service';


import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-corporatecourselist',
  templateUrl: './corporatecourselist.component.html',
  styleUrls: ['./corporatecourselist.component.css']
})
export class CorporatecourselistComponent implements OnInit {

  
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
  constructor(private _courseService:CourseServiceService,private _router:Router,private route:ActivatedRoute,private dialog: MatDialog) { }

  ngOnInit(): void {

  let  type=localStorage.getItem("type");
  
this.t=type;
   
      console.log("Inside Corporate course list:"+this.t);
      this._courseService.getCorporateCourses().subscribe((data:any)=>{
        this.data=JSON.parse(JSON.stringify(data));
      });

  }


   deleteCourse(name:any){
      
   
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Delete Course',
       
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
       
        this._courseService.deleteCourse(name)
        .subscribe((data) => {
          this.data = this.data.filter(b => b !== name);
          //this.books = JSON.parse(JSON.stringify(data));
          window. location. reload();
        
        });
      }
    });
  }




editCourse(name:any){
  
  localStorage.setItem("oldcoursename",name); 


  
    this._router.navigate(['../updateCorporateCourse'],{ relativeTo: this.route });

  
  
  
 }

  

}
