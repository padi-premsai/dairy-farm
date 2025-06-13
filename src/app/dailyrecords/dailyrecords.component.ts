import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-dailyrecords',
  templateUrl: './dailyrecords.component.html',
  styleUrls: ['./dailyrecords.component.css']
})
export class DailyrecordsComponent implements OnInit {
  details:any;
  updatebyid:any;
  total:number;
  date:any;
  custData:any;
  constructor(private serv:EmpService,private router:Router) {
    this.details="";
    this.total=0;
   }

  ngOnInit(): void {
    this.date="";
    this.serv.getAllRecords().subscribe((data:any)=>{
      console.log(data);
      this.details=data;
      this.total=0;
      this.details.forEach((element:any )=> {
        this.total=this.total+(element.price*element.qty);
    });
    })
  }
  editTodayRecord(record:any){
    this.serv.updateTodayRecord(record).subscribe((data:any)=>{
      console.log(data);
      this.router.navigate(['showrecords']);
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
    this.serv.getCustMonthdata(this.date ,search.cust_id).subscribe((data:any)=>{
      console.log(data);
      this.details=data;
      console.log(this.details)
      this.total=0;
      this.details.forEach((element:any )=> {
        this.total=this.total+(element.price*element.qty);
    });
    })  } 
}
  getDataByMonth(searchdate:any){
    if(searchdate.date==""){
      this.ngOnInit();
    }
    else{
    console.log(searchdate);
    this.serv.getAllmonthdata(searchdate.date).subscribe((data:any)=>{
      console.log(data);
      this.details=data;
      this.date=searchdate.date;
      console.log(this.details)
      this.total=0;
      this.details.forEach((element:any )=> {
        this.total=this.total+(element.price*element.qty);
    });
    })
  } }
    options = {
    "key": "rzp_test_7HdkaZ1xFGPomB", // Enter the Key ID generated from the Dashboard
    "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "FARMERS ALL NATURAL MILK",
    "description": "Test Transaction",
    "image": "https://static.wixstatic.com/media/47040d_ec404901589c4388b9119743a8b047a1~mv2.png/v1/fill/w_220,h_123,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/FANM-logo-blk.png",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "http://goodluckhours.com/payment-successful/",
    "prefill": {
        "name": "Arun Kumar",
        "email": "arun.kumar@example.com",
        "contact": "9999999999"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
rzp1:any;
pay(total:any){
  this.options.amount=total;
  this.rzp1 = new this.serv.nativeWindow.Razorpay(this.options);
  this.rzp1.open(); 
}

  }


