import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  amounts:any;
  updateAmount:any;

  constructor(private serv:EmpService,private router:Router) {
    this.amounts="";

    this.updateAmount={
      animal:'',
      price:'',
      
    }
   }

  ngOnInit(): void {
    this.serv.getallamount().subscribe((data:any)=>{
      console.log(data);
      this.amounts=data;
    })
  }
  update(amount:any){
    this.updateAmount=amount;                         
  }
  editAmount(newAmount:any){
    this.serv.getupdateanimal(newAmount).subscribe((data:any)=>{
      console.log(data);
  })
  this.router.navigate(['showanimal']);
  }
  nav(){
    this.router.navigate(['admin']);
  }
}

