import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ifStmt } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

 
  constructor(private http:HttpClient) { }


  retailBrouchreRequest(data:any){
  

    return this.http.post("/api/insert",{"applicant":data})
    .subscribe(data =>{console.log(data)});
  }

  getRetailBrochure(){
      
            return this.http.get("/api/display");
      }


  getCorporateBrochure(){

        return this.http.get("/api/displayCorporateRequest");
  }
  getInstitutionalBrochure(){
      return this.http.get("/api/displayInstitutionalRequest");
  }
  //--------------------------------End Brochure--------    
 addRetailCourse(course:any){
        console.log("Servicce data for retail : "+course.name);

        return this.http.post("/api/addRetailCourse",{"course":course})
         .subscribe(data =>{console.log(data+"Data added successfully.....")});


      }
      addInstitutionalCourse(course:any){
        console.log("Servicce data for institutional : "+course.name);

        return this.http.post("/api/addInstitutionalCourse",{"course":course})
        .subscribe(data =>{console.log(data+"Data added successfully.....")});


      }
      addCorporateCourse(course:any){
        console.log("Servicce data for corporate : "+course.name);

        return this.http.post("/api/addCorporateCourse",{"course":course})
        .subscribe(data =>{console.log(data+"Data added successfully.....")});


      }
      getRetailCourses(){
      
        return this.http.get("/api/getRetailCourseData");
  }

getRetailCoursesDetails(name:any){
      
  console.log("Inside Course details request Service...");
    return this.http.get("/api/getRetailCourseDetails/"+name);
}
  getInstitutionalCourses(){
      
    return this.http.get("/api/getInstitutionalCourseData");
}
getInstitutionalCoursesDeatils(course_name:any){
      
  return this.http.get("/api/getInstitutionalCourseDetails/"+course_name);
}
getCorporateCourses(){
      
  return this.http.get("/api/getCorporateCourseData");
}
getCorporateCoursesDeatils(course_name:any){
      
  return this.http.get("/api/getCorporateCourseDetails/"+course_name);
}
  

///------------------------------Delete and update------------------------

deleteCourse(name:any){

  let type=localStorage.getItem("type");
  if(type==="Retail"){
    return this.http.delete("/api/retailcourse/"+name);
    
  }
  else if(type==="Institutional"){
    return this.http.delete("/api/institutional/course/"+name);
  }
  else{
    return this.http.delete("/api/corporate/course/"+name);
  }
 
}
updateRetailCourse(course:any){
  console.log("inside course service"+course);
  let oldcoursename=localStorage.getItem("oldcoursename");
  return this.http.put("/api/retailcourseupdate/"+oldcoursename,course)
 .subscribe(data =>{console.log(data)})


}

updateCorporateCourse(course:any){
  console.log("inside course service"+course);
  let oldcoursename=localStorage.getItem("oldcoursename");
  return this.http.put("/api/corporatecourseupdate/"+oldcoursename,course)
 .subscribe(data =>{console.log(data)})


}
updateInstitutionalCourse(course:any){
  console.log("inside course service"+course);
  let oldcoursename=localStorage.getItem("oldcoursename");
  return this.http.put("/api/institutionalcourseupdate/"+oldcoursename,course)
 .subscribe(data =>{console.log(data)})


}

}
