import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CourseServiceService } from 'src/app/course-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private courseservice:CourseServiceService,private router:Router) { }
  user={
    username:'',
    password:''
  }
  error="";
  passwordErrorlbl="";

  ngOnInit(): void {
   // this.nav.hide();
  }

  clearText(){
    this.error='';
    
  }
  loginUser(){
    this.error="";
    
    console.log("Login Component method");
   
       if(this.user.password=="Admin123")
       {
         localStorage.setItem("token","token");
        this.router.navigate(["/admin"]);
       }
       else{

        this.passwordErrorlbl="Invalid Password";
       }
      
      

    }
  }

