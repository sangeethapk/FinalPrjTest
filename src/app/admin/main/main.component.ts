import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  sidenav_opened=true;
  constructor(private _router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  logout(){

    this._router.navigate(['../login'],{ relativeTo: this.route });
    localStorage.removeItem("token");
  }

  addinstitutionalcourse(){
    this._router.navigate(['addinstitutionalcourse'],{ relativeTo: this.route });

  }

  addcorporatecourse(){

    this._router.navigate(['addcorporatecourse'],{ relativeTo: this.route });

  }

  addretailcourse(){
    this._router.navigate(['addretailcourse'],{ relativeTo: this.route });

  }
  
  getRetailCourseList(){
    console.log("main getRetaillist");
     localStorage.setItem("type","Retail");
     this._router.navigate(['./courselist'],{ relativeTo: this.route });
    

  }
  getInstitutionalCourseList()
  {
    console.log("main getInstitutionallist");
    localStorage.setItem("type","Institutional");
    this._router.navigate(["./instituionalcourselist"],{ relativeTo: this.route});
    
  }
  getCorporateCourseList(){

    console.log("main getCorporatelist");
    localStorage.setItem("type","Corporate");
    this._router.navigate(["./corporatecourselist"],{ relativeTo: this.route });
   
  }

}
