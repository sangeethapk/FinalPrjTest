import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from 'src/app/course-service.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

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
  constructor( private courseService:CourseServiceService) { 
    this.data=[];

      this.courseService.getRetailBrochure()
        .subscribe((datanew: any) =>{
          console.log(datanew);
          this.data=datanew;

          
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

}
