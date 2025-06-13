import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.css']
})
export class CustomerdetailComponent implements OnInit {
  records:any
  total:any;

  constructor(private serv:EmpService,private router:Router) {
    this.records="";
    this.total=0;
   }

  ngOnInit(): void {
    this.total=0;
    this.serv.getmydetails().subscribe((data:any)=>{
      this.records=data;
      this.records.forEach((element:any )=> {
        this.total=this.total+(element.price*element.qty);
    });
    })
  }
  getDataByMonth(searchdate:any){
    if(searchdate.date==""){
      this.ngOnInit();
    }
    else{
    console.log(searchdate);
    this.serv.getAllMyMonthData(searchdate.date).subscribe((data:any)=>{
      console.log(data);
      this.records=data;
      console.log(this.records)
      this.total=0;
      this.records.forEach((element:any )=> {
        this.total=this.total+(element.price*element.qty);
    });
    })
  } }
  nav(){
    this.router.navigate(['customer']);
  }
}
