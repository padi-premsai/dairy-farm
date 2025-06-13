import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-userdaily',
  templateUrl: './userdaily.component.html',
  styleUrls: ['./userdaily.component.css']
})
export class UserdailyComponent implements OnInit {

  records:any;
  total:any;
  constructor(private serv:EmpService,private router:Router) { 
    this.total=0;
  }

  ngOnInit(): void {

  }
  getAllMyDayData(date:any){
    console.log(date.date)
    this.serv.getAllMyDayData(date.date).subscribe((data:any)=>{
      this.records=data;
      this.total=0;
      this.records.forEach((element:any )=> {
        this.total=this.total+(element.price*element.qty);
      });
    })
  }
 
  nav(){
    this.router.navigate(['customer']);
  }
}