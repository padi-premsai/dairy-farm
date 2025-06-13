import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:EmpService,private router:Router) { }

  ngOnInit(): void {
  }

  loggout(){
    this.service.setUserLoggedOut();
    this.router.navigate(['login']);
  }

}
