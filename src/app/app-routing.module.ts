import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { WhyThirumalaiComponent } from './pages/why-thirumalai/why-thirumalai.component';
import { TreatmentsComponent } from './pages/treatments/treatments.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { OnlineConsultationComponent } from './book/online-consultation/online-consultation.component';
import { HealthCheckComponent } from './book/health-check/health-check.component';
import { BuyMedicineComponent } from './book/buy-medicine/buy-medicine.component';
import { BookAppointmentsComponent } from './pages/book-appointments/book-appointments.component';

const routes: Routes = [
  {
    path: 'Home', component: HomeComponent,
    children: [
      { path: 'OnlineConsultation', component: OnlineConsultationComponent },
      { path: 'HealthCheck', component: HealthCheckComponent },
      { path: 'BuyMedicine', component: BuyMedicineComponent },
      { path: 'BookAppointments', component: BookAppointmentsComponent }
    ]
  },
  { path: 'AboutUs', component: AboutUsComponent },
  { path: 'WhyThirumalai', component: WhyThirumalaiComponent },
  { path: 'Treatments', component: TreatmentsComponent },
  { path: 'ContactUs', component: ContactUsComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
