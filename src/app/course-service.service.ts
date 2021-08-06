import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ifStmt } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

 
  constructor(private http:HttpClient) { }

//server_address:string='/api';//for production
server_address:string="http://localhost:3000" //for development
  retailBrouchreRequest(data:any){
  

    return this.http.post(`${this.server_address}/insert`,{"applicant":data})
    .subscribe(data =>{console.log(data)});
  }

  institutionalBrouchreRequest(data:any){
  

    return this.http.post(`${this.server_address}/insertInstitutionalRequest`,{"applicant":data})
    .subscribe(data =>{console.log(data)});
  }
  corporateBrouchreRequest(data:any){
  

    return this.http.post(`${this.server_address}/insertCorporateRequest`,{"applicant":data})
    .subscribe(data =>{console.log(data)});
  }
  
  getRetailBrochure(){
      
            return this.http.get(`${this.server_address}/display`);
      }


  getCorporateBrochure(){

        return this.http.get(`${this.server_address}/displayCorporateRequest`);
  }
  getInstitutionalBrochure(){
      return this.http.get(`${this.server_address}/displayInstitutionalRequest`);
  }
  //--------------------------------End Brochure--------    
 addRetailCourse(course:any){
        console.log("Servicce data for retail : "+course.name);

        return this.http.post(`${this.server_address}/addRetailCourse`,{"course":course})
         .subscribe(data =>{console.log(data+"Data added successfully.....")});


      }
      addInstitutionalCourse(course:any){
        console.log("Servicce data for institutional : "+course.name);

        return this.http.post(`${this.server_address}/addInstitutionalCourse`,{"course":course})
        .subscribe(data =>{console.log(data+"Data added successfully.....")});


      }
      addCorporateCourse(course:any){
        console.log("Servicce data for corporate : "+course.name);

        return this.http.post(`${this.server_address}/addCorporateCourse`,{"course":course})
        .subscribe(data =>{console.log(data+"Data added successfully.....")});


      }
      getRetailCourses(){
      
        return this.http.get(`${this.server_address}/getRetailCourseData`);
  }

getRetailCoursesDetails(name:any){
      
  console.log("Inside Course details request Service...");
    return this.http.get(`${this.server_address}/getRetailCourseDetails/`+name);
}
  getInstitutionalCourses(){
      
    return this.http.get(`${this.server_address}/getInstitutionalCourseData`);
}
getInstitutionalCoursesDeatils(course_name:any){
      
  return this.http.get(`${this.server_address}/getInstitutionalCourseDetails/`+course_name);
}
getCorporateCourses(){
      
  return this.http.get(`${this.server_address}/getCorporateCourseData`);
}
getCorporateCoursesDeatils(course_name:any){
      
  return this.http.get(`${this.server_address}/getCorporateCourseDetails/`+course_name);
}
  

///------------------------------Delete and update------------------------

deleteCourse(name:any){

  let type=localStorage.getItem("type");
  if(type==="Retail"){
    return this.http.delete(`${this.server_address}/retailcourse/`+name);
    
  }
  else if(type==="Institutional"){
    return this.http.delete(`${this.server_address}/institutional/course/`+name);
  }
  else{
    return this.http.delete(`${this.server_address}/corporate/course/`+name);
  }
 
}
updateRetailCourse(course:any){
  console.log("inside course service"+course);
  let oldcoursename=localStorage.getItem("oldcoursename");
  return this.http.put(`${this.server_address}/retailcourseupdate/`+oldcoursename,course)
 .subscribe(data =>{console.log(data)})


}

updateCorporateCourse(course:any){
  console.log("inside course service"+course);
  let oldcoursename=localStorage.getItem("oldcoursename");
  return this.http.put(`${this.server_address}/corporatecourseupdate/`+oldcoursename,course)
 .subscribe(data =>{console.log(data)})


}
updateInstitutionalCourse(course:any){
  console.log("inside course service"+course);
  let oldcoursename=localStorage.getItem("oldcoursename");
  return this.http.put(`${this.server_address}/institutionalcourseupdate/`+oldcoursename,course)
 .subscribe(data =>{console.log(data)})


}

}
