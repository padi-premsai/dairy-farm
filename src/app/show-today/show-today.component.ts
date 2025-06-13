import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-show-today',
  templateUrl: './show-today.component.html',
  styleUrls: ['./show-today.component.css']
})
export class ShowTodayComponent implements OnInit {
  details:any;
  date:any;
  constructor(private serv:EmpService,private router:Router) {
    this.details="";
   }

  ngOnInit(): void {
    this.serv.getAllDayData().subscribe((data:any)=>{
      console.log(data);
      this.details=data;
      // for(let i=0;i<1;i++){
        this.date=this.details[0].date;
      // }
    })
  }
 nav(){
  this.router.navigate(['showdaily']);
 }
 getDataBySearch(search:any){
  if(search.cust_id==""){
    this.ngOnInit();
  }
  else{
  console.log(search);
  this.serv.getAllDayDataById(this.date,search.cust_id).subscribe((data:any)=>{
    console.log(data);
    this.details=data;
    console.log(this.details)
  })
} }
}
