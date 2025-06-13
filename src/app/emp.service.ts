import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
function _window() : any {
  // return the global native browser window object
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  userLoggedIn : boolean;
  userDetails:any;
  params:any;
  date:any;
  get nativeWindow() : any {
    return _window();
 }
 
  constructor(private httpClient:HttpClient) {
    this.userLoggedIn=false;
    this.params={
    "date":"",
    "cust_id":0,
   }
   }

   setUserLoggedIn(){
    this.userLoggedIn=true;
   }
   getUserLoggedIn():boolean{
    return this.userLoggedIn;
   }
   setUserDetails(userDetails:any){
    this.userDetails=userDetails;
   }
   setUserLoggedOut(){
    this.userLoggedIn=false;
   }
   getCustmers(){
    return this.httpClient.get("customer/list");
   }
   registerCust(customer:any){
    return this.httpClient.post("customer/save",customer);
   }
   deleteCust(cust_id:any){
    return this.httpClient.delete("customer/delete/"+cust_id);
   }
   getRecords(){
    return this.httpClient.get("customer/todayRecords");
   }
   updateTodayRecord(Onerecord:any){
    console.log(Onerecord)
    return this.httpClient.post("record/save",Onerecord);
   }
   getmydetails(){
    return this.httpClient.get("record/custrecord/"+this.userDetails.cust_id);
   }
   getCustdetailsById(cust_id:number){
    console.log(cust_id);
    return this.httpClient.get("customer/listById/"+cust_id);
   }
   getallamount(){
    return this.httpClient.get("amount/all");
   }
   getupdateanimal(amount:any){
    return this.httpClient.put("amount/update",amount);
   }
   getAllRecords(){
    return this.httpClient.get("record/records")
   }
   getAllRecordsById(cust_id:any){
    console.log(cust_id);
    return this.httpClient.get("record/custrecord/"+cust_id);
   }
   getAllmonthdata(date:any){
    console.log(date);
    return this.httpClient.get("record/monthrecords/"+date);
   }
   getCustMonthdata(date:any,cust_id:number){
    this.params.date=date;
    this.params.cust_id=cust_id;
    return this.httpClient.put("record/custmonthrecords",this.params);
   }
   getAllMyMonthData(date:any){
    this.params.date=date;
    this.params.cust_id=this.userDetails.cust_id;
    return this.httpClient.put("record/custmonthrecords",this.params);
   }
   getAllMyDayData(date:any){
    this.params.date=date;
    this.params.cust_id=this.userDetails.cust_id;
    console.log(this.params);
    return this.httpClient.put("record/custdayrecords",this.params);
   }
   adminDayRecords(date:any){
    this.date=date;
    return this.httpClient.get("record/admindayrecords/"+date);
   }
   getAllDayData(){
    return this.httpClient.get("record/adminDayRecords");
   }
   getAllDayDataById(date:any,cust_id:any){
    this.params.date=date;
    this.params.cust_id=cust_id;
    return this.httpClient.put("record/custdayrecords",this.params);
   }
 }
