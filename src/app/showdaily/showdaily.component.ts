import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-showdaily',
  templateUrl: './showdaily.component.html',
  styleUrls: ['./showdaily.component.css']
})
export class ShowdailyComponent implements OnInit {
  records:any;
  Onerecord={
    r_id:"",
    cust_id:"",
    name:"",
    date:"",
    animal:"",
    phoneno:"",
    qty:"",
    price:""
  }
  constructor(private milkServ:EmpService,private router:Router) { 
  }
  ngOnInit(): void {
    this.milkServ.getRecords().subscribe((data:any)=>{
      this.records=data;
    })
  }
  edit(record:any){
    this.Onerecord=record;
  }
  setTodayRecords(){
    console.log(this.Onerecord);
    this.Onerecord.date="0";
    this.milkServ.updateTodayRecord(this.Onerecord).subscribe((data)=>{
      // this.records=data;
    })
    }
    navToday(){
      this.router.navigate(['admintoday']);
    }
    nav(){
    this.router.navigate(['admin']);
  }
}
