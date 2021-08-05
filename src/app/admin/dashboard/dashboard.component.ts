import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from 'src/app/course-service.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  fileName= 'ExcelSheet.xlsx';  
  count=0;
 active = 'top';
 data=[{
     submittedDate:'',
     name:'',
     email:'',
     phone:'',
     highest_qualification:'',
     employed:'',
     messsage:''

 }];
 data1=[{
  submittedDate:'',
  name:'',
  email:'',
  phone:'',
  highest_qualification:'',
  employed:'',
  messsage:''

}];
data2=[{
  submittedDate:'',
  name:'',
  email:'',
  phone:'',
  highest_qualification:'',
  employed:'',
  messsage:''

}];
  constructor( private courseService:CourseServiceService) { 
    this.data=[];
    this.data1=[];
    this.data2=[];

      this.courseService.getRetailBrochure()
        .subscribe((datanew: any) =>{
          
          this.data=datanew;
          console.log("Retail request...."+this.data);

          
        });

        this.courseService.getCorporateBrochure()
        .subscribe((datanew: any) =>{
          console.log(datanew);
          this.data1=datanew;

          
        });

        this.courseService.getInstitutionalBrochure()
        .subscribe((datanew: any) =>{
          console.log(datanew);
          this.data2=datanew;

          
        });
      }

  ngOnInit(): void {
  }
  exportToExcel() {
    /* table id is passed over here */   
    let element = document.getElementById('excel-table'); 
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */
    XLSX.writeFile(wb, this.fileName);
 
    }

    exportToExcel1() {
      /* table id is passed over here */   
      let element = document.getElementById('excel-table1'); 
      const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
   
      /* generate workbook and add the worksheet */
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
   
      /* save to file */
      XLSX.writeFile(wb, this.fileName);
   
      }
      exportToExcel2() {
        /* table id is passed over here */   
        let element = document.getElementById('excel-table2'); 
        const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
     
        /* generate workbook and add the worksheet */
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
     
        /* save to file */
        XLSX.writeFile(wb, this.fileName);
     
        }
 

}
