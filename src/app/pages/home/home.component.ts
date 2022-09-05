import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  bookings = [
    {
      title:'Book Online Consultation',
      route:'OnlineConsultation'
    },{
      title:'Book Health Check',
      route:'HealthCheck'
    },{
      title:'Buy Medicine',
      route:'BuyMedicine'
    },{
      title:'Book Appointment',
      route:'BookAppointments'
    }
  ];

  //"OnlineConsultation"

  ngOnInit(): void { }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
