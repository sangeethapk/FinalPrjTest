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
  
  addapplicant():void{

   
      
      alert("Added Successfully");
      console.log(this.applicant.name+"....");
      this._courseService.retailBrouchreRequest(this.applicant);
      this._router.navigate(['/admin']);
     
     
   }
  msg='';
   emailValidate(event:any){

    const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
    if(!regex.test(event.target.value)){
     this. msg='Invalid Email ID'
    }
    else{
      this. msg=''
    }
   }
   
   msg1='';
   phoneValidation(event:any){
    const regex = new RegExp('^[0-9 ]{10}');
    if(!regex.test(this.applicant.phone)){
     this. msg1='Invalid Phone Number'
    }
    else{
      this. msg1=''
    }


   }
  

}
