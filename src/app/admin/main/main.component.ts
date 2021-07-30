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
  
  getRetailCourseList(){
    console.log("main getRetaillist");
     localStorage.setItem("type","Retail");
     this._router.navigate(['./courselist'],{ relativeTo: this.route });
    

  }
  getInstitutionalCourseList()
  {
    console.log("main getInstitutionallist");
    localStorage.setItem("type","Institutional");
     this._router.navigate(["./courselist"],{ relativeTo: this.route });
  }
  getCorporateCourseList(){

    console.log("main getCorporatelist");
    localStorage.setItem("type","Corporate");
    this._router.navigate(["./courselist"],{ relativeTo: this.route});
  }

}
