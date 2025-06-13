import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AnimalComponent } from './animal/animal.component';
import { AuthGuard } from './auth.guard';
import { CustHomeComponent } from './cust-home/cust-home.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { DailyrecordsComponent } from './dailyrecords/dailyrecords.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowTodayComponent } from './show-today/show-today.component';
import { ShowdailyComponent } from './showdaily/showdaily.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { UserdailyComponent } from './userdaily/userdaily.component';

const routes: Routes = [{path:"home",component:HomepageComponent},
                        {path:"",component:LoginComponent},
                        {path:"admin",component:AdminHomeComponent},
                        {path:"login",canActivate:[AuthGuard],component:LoginComponent},
                        {path:"register",canActivate:[AuthGuard], component:RegisterComponent},
                        {path:"showuser", component:ShowuserComponent},
                        {path:"showrecords", component:DailyrecordsComponent},
                        {path:"showanimal", component:AnimalComponent},
                        {path:"showdaily", component:ShowdailyComponent},
                        {path:"customer", component:CustHomeComponent},
                        {path:"showcust",  component:CustomerdetailComponent},
                        {path:"today", component:UserdailyComponent},
                        {path:"admintoday", component:ShowTodayComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
