import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EmpService } from '../emp.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  customers:any;
  constructor(private serv:EmpService,private  router:Router, private productServ:ProductService) {
   
   }

  ngOnInit(): void {
    this.serv.getCustmers().subscribe((data:any)=>{
      this.customers=data;
    })
  }
  loginSubmit(value:any){
  console.log(value);
  if(value.loginId=='admin' && value.pswd=='password'){
    this.serv.setUserLoggedIn();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Login Successfully',
      showConfirmButton: false,
      timer: 1500
    });
    this.router.navigate(['admin'])
  }
  else{if(!(this.checkEmp(value))){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Invalid Credentials',
      showConfirmButton: false,
      timer: 1500
    });
  }
}
}
checkEmp(value:any):Boolean{
  console.log(this.productServ.get('123456$#@$^@1ERF', "Ajay@123"));
    for(let i = 0; i < this.customers.length; i++) {
      if((value.loginId== this.customers[i].cust_id || value.loginId==this.customers[i].phoneNo) && value.pswd==this.productServ.get('123456$#@$^@1ERF', this.customers[i].password))
      {
        this.serv.setUserLoggedIn();
        this.serv.setUserDetails(this.customers[i]);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Login Successfully',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['customer']);
        console.log('HI '+this.customers[i].name);
        return true;
      }
    }
    return false;
  }
}
