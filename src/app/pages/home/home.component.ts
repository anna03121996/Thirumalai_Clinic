import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [
      'assets/images/sliderImg1.webp', 
      'assets/images/sliderImg2.webp', 
      'assets/images/sliderImg3.webp', 
      'assets/images/sliderImg4.webp'
      ];
  constructor() { }

  bookings = [
    {
      title: 'Book Online Consultation',
      route: 'OnlineConsultation'
    }, {
      title: 'Book Health Check',
      route: 'HealthCheck'
    }, {
      title: 'Buy Medicine',
      route: 'BuyMedicine'
    }, {
      title: 'Book Appointment',
      route: 'BookAppointments'
    }
  ];



  ngOnInit(): void { }
}
