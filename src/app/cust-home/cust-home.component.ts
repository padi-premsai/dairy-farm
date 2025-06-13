import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-home',
  templateUrl: './cust-home.component.html',
  styleUrls: ['./cust-home.component.css']
})
export class CustHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navuser(){
    this.router.navigate(['today']);
  }
  navmonth(){
    this.router.navigate(['showcust']);
  }
}
