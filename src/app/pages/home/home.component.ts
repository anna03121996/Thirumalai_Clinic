import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [
      {image:'assets/images/sliderImg1.webp', heading:'Good Service'}, 
      {image:'assets/images/sliderImg2.webp', heading:'Best Treatment'},
      {image:'assets/images/sliderImg3.webp', heading:'Feel Better'}, 
      {image:'assets/images/sliderImg4.webp', heading:'Time and Quality'},
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

  public isCollapsed = false;

  ngOnInit(): void { }
}
