import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { __values } from 'tslib';
import { EmpService } from '../emp.service';
import { ProductService } from '../product.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  stud:any;
  constructor(private emp:EmpService,private serv:ProductService,private router:Router) { }

  ngOnInit(): void {
  }
  registrationok(value : any ){
    var encrypted = this.serv.set('123456$#@$^@1ERF', value.password);
    value.password=encrypted;
    console.log(value);
    this.emp.registerCust(value).subscribe((data:any)=>{
      console.log(data);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registered Successfully',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['login']);
    })
  }
  
}
