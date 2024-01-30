import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { PaymentdetailsFormComponent } from './components/payment-details/paymentdetails-form/paymentdetails-form.component';
import { HeaderComponent } from './components/LandingPageCom/header/header.component';
import { FooterComponent } from './components/LandingPageCom/footer/footer.component';
import { HomeComponent } from './components/LandingPageCom/home/home.component';
import { LoginPageComponent } from './components/DashBoardCom/login-page/login-page.component';
import { SideNavBarComponent } from './components/DashBoardCom/side-nav-bar/side-nav-bar.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentdetailsFormComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginPageComponent,
    SideNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot({})
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
