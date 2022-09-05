import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/header.component';
import { NavBarComponent } from './main/nav-bar/nav-bar.component';
import { FooterComponent } from './main/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BookAppointmentsComponent } from './pages/book-appointments/book-appointments.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { WhyThirumalaiComponent } from './pages/why-thirumalai/why-thirumalai.component';
import { TreatmentsComponent } from './pages/treatments/treatments.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { OnlineConsultationComponent } from './book/online-consultation/online-consultation.component';
import { HealthCheckComponent } from './book/health-check/health-check.component';
import { BuyMedicineComponent } from './book/buy-medicine/buy-medicine.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    BookAppointmentsComponent,
    AboutUsComponent,
    WhyThirumalaiComponent,
    TreatmentsComponent,
    ContactUsComponent,
    OnlineConsultationComponent,
    HealthCheckComponent,
    BuyMedicineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
