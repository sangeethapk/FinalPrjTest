import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService } from '../course-service.service';
import * as XLSX from 'xlsx'; 
import {FormControl, Validators} from '@angular/forms';

 
@Component({
  selector: 'app-retail',
  templateUrl: './retail.component.html',
  styleUrls: ['./retail.component.css']
})
export class RetailComponent implements OnInit {
//  applicant={
//   name:'',
//   phone:'',
//   email:'',
//   employed:'',
//   highest_qualification:'',
//   messsage:'',
//   //downloaded:false
//   };
applicant={
  
  name:'',
  phone:'',
  email:'',
  employed:'',
  qualification:'',
  messsage:''
};


count=0;


  constructor(private _courseService:CourseServiceService,private _router:Router) {console.log("test constructor") }
  ngOnInit(): void {

   
   
  }
  // register(){
  // alert("Submitted");
  //   console.log(this.name);
  //        this._courseService.retailBrouchreRequest(this.name);


  // }

  addapplicant():void{

   
      
      alert("Added Successfully");
      console.log(this.applicant.name+"....");
      this._courseService.retailBrouchreRequest(this.applicant);
      this._router.navigate(['/admin']);
     
     
   }
  

}
