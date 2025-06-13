import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShowuserComponent } from './showuser/showuser.component';
import { HttpClientModule} from '@angular/common/http';
import { DailyrecordsComponent } from './dailyrecords/dailyrecords.component';
import { AnimalComponent } from './animal/animal.component';
import { ShowdailyComponent } from './showdaily/showdaily.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { TotalPipe } from './total.pipe';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CustHomeComponent } from './cust-home/cust-home.component';
import { UserdailyComponent } from './userdaily/userdaily.component';
import { ShowTodayComponent } from './show-today/show-today.component';
import { ProductService } from './product.service';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    ShowuserComponent,
    DailyrecordsComponent,
    AnimalComponent,
    ShowdailyComponent,
    CustomerdetailComponent,
    TotalPipe,
    AdminHomeComponent,
    CustHomeComponent,
    UserdailyComponent,
    ShowTodayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule ,
    
    

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
