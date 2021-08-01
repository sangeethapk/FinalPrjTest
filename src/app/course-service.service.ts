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
  

    return this.http.post("http://localhost:3000/insert",{"applicant":data})
    .subscribe(data =>{console.log(data)});
  }

  getRetailBrochure(){
      
            return this.http.get("http://localhost:3000/display");
      }
 addRetailCourse(course:any){
        console.log("Servicce data for retail : "+course.name);

        return this.http.post("http://localhost:3000/addRetailCourse",{"course":course})
        .subscribe(data =>{console.log(data+"Data added successfully.....")});


      }
      addInstitutionalCourse(course:any){
        console.log("Servicce data for institutional : "+course.name);

        return this.http.post("http://localhost:3000/addInstitutionalCourse",{"course":course})
        .subscribe(data =>{console.log(data+"Data added successfully.....")});


      }
      addCorporateCourse(course:any){
        console.log("Servicce data for corporate : "+course.name);

        return this.http.post("http://localhost:3000/addCorporateCourse",{"course":course})
        .subscribe(data =>{console.log(data+"Data added successfully.....")});


      }
      getRetailCourses(){
      
        return this.http.get("http://localhost:3000/getRetailCourseData");
  }

getRetailCoursesDetails(name:any){
      
  console.log("Inside Course details request Service...");
    return this.http.get("http://localhost:3000/getRetailCourseDetails/"+name);
}
  getInstitutionalCourses(){
      
    return this.http.get("http://localhost:3000/getInstitutionalCourseData");
}
getInstitutionalCoursesDeatils(course_name:any){
      
  return this.http.get("http://localhost:3000/getInstitutionalCourseDetails/"+course_name);
}
getCorporateCourses(){
      
  return this.http.get("http://localhost:3000/getCorporateCourseData");
}
getCorporateCoursesDeatils(course_name:any){
      
  return this.http.get("http://localhost:3000/getCorporateCourseDetails/"+course_name);
}
  

///------------------------------Delete and update------------------------

deleteCourse(name:any){

  let type=localStorage.getItem("type");
  if(type==="Retail"){
    return this.http.delete("http://localhost:3000/retailcourse/"+name);
    
  }
  else if(type==="Institutional"){
    return this.http.delete("http://localhost:3000/institutional/course/"+name);
  }
  else{
    return this.http.delete("http://localhost:3000/corporate/course/"+name);
  }
 
}
updateRetailCourse(course:any){
  console.log("inside course service"+course);
  let oldcoursename=localStorage.getItem("oldcoursename");
  return this.http.put("http://localhost:3000/retailcourseupdate/"+oldcoursename,course)
 .subscribe(data =>{console.log(data)})


}

updateCorporateCourse(course:any){
  console.log("inside course service"+course);
  let oldcoursename=localStorage.getItem("oldcoursename");
  return this.http.put("http://localhost:3000/corporatecourseupdate/"+oldcoursename,course)
 .subscribe(data =>{console.log(data)})


}
updateInstitutionalCourse(course:any){
  console.log("inside course service"+course);
  let oldcoursename=localStorage.getItem("oldcoursename");
  return this.http.put("http://localhost:3000/institutionalcourseupdate/"+oldcoursename,course)
 .subscribe(data =>{console.log(data)})


}

}
