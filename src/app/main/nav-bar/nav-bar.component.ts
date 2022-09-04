import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  
  nav = [
    {
      option:"Home",
      route:"Home"
    },{
      option:"Book Appointment",
      route:"BookAppointments"
    },{
      option:"About Us",
      route:"AboutUs"
    },{
      option:"Why Thirumalai",
      route:"WhyThirumalai"
    }
    ,{
      option:"Treatments",
      route:"Treatments"
    },{
      option:"Contact Us",
      route:"ContactUs"
    }
  ];
  
  ngOnInit(): void {
  }

}
