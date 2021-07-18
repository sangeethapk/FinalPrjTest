import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

 
  constructor(private http:HttpClient) { }


  retailBrouchreRequest(data:any){
  

    return this.http.post("http://localhost:3000/insert",{"applicant":data})
    .subscribe(data =>{console.log(data)});
  }

  getRetailBrochure(){
      
            return this.http.get("http://localhost:3000/display");
      }
      addRetailCourse(course:any){
        console.log("Servicce data for retail : "+course.name);

        return this.http.post("http://localhost:3000/addRetailCourse",{"course":course})
        .subscribe(data =>{console.log(data)});
      }
      getRetailCourseDetails(){
      
        return this.http.get("http://localhost:3000/getRetailCourseData");
  }
    
  
}
