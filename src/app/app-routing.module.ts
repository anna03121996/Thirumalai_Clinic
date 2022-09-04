import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookAppointmentsComponent } from './pages/book-appointments/book-appointments.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { WhyThirumalaiComponent } from './pages/why-thirumalai/why-thirumalai.component';
import { TreatmentsComponent } from './pages/treatments/treatments.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  { path:'Home',component:HomeComponent },
  { path:'BookAppointments', component:BookAppointmentsComponent },
  { path:'AboutUs', component:AboutUsComponent },
  { path:'WhyThirumalai', component:WhyThirumalaiComponent },
  { path:'Treatments', component:TreatmentsComponent },
  { path:'ContactUs', component:ContactUsComponent },
  {path:'',redirectTo:'Home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
