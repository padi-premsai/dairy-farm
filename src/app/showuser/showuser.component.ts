import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent implements OnInit {
details:any;
  constructor(private serv:EmpService,private router:Router) {
    this.details="";
   }

  ngOnInit(): void {
    this.serv.getCustmers().subscribe((data:any)=>{
      console.log(data);
      this.details=data;
    })
  }
 nav(){
  this.router.navigate(['admin']);
 }
 getDataBySearch(search:any){
  if(search.cust_id==""){
    this.ngOnInit();
  }
  else{
  console.log(search);
  this.serv.getCustdetailsById(search.cust_id).subscribe((data:any)=>{
    console.log(data);
    this.details=data;
    console.log(this.details)
  })
} }
}
