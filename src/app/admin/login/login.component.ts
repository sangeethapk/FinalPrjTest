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
  error=""
  passwordError=""

  ngOnInit(): void {
   // this.nav.hide();
  }

  clearText(){
    this.error='';
    
  }
  loginUser(){
    this.error="";
    console.log("Login Component method");
    // this.courseservice.authenticateLogin(this.user)
    // .subscribe(res=>{
     
    //   console.log("Status from server");
    //   if(this.user.username=="admin"&&this.user.password=="Admin123")
    //   {
    //       localStorage.setItem("token",res.token);
    //   }
     
    //   this.router.navigate(["/admin"]);
    
    // },
    //     (error) => {                              //Error callback
    //       console.error('error caught in component')
    //       const errorMessage = error;
    //      const  loading = false;
    //      if(error.status==403)
    //      this.error="User does not exist";
    //      else if(error.status==401)
    //      this.passwordError="Invalid Password";
    //      else 
    //        this.error=error;

    //      console.log(errorMessage);
         
       // });

       if(this.user.username=="admin"&&this.user.password=="Admin123")
       {
        this.router.navigate(["/admin"]);
       }
       else{

        this.passwordError="Invalid Username or Password";
       }
      
      

    }
  }

