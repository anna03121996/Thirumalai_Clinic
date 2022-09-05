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
      title:"Home",
      route:"Home"
    },{
      title:"Book Appointment",
      route:"BookAppointments"
    },{
      title:"About Us",
      route:"AboutUs"
    },{
      title:"Why Thirumalai",
      route:"WhyThirumalai"
    }
    ,{
      title:"Treatments",
      route:"Treatments"
    },{
      title:"Contact Us",
      route:"ContactUs"
    }
  ];
  
  ngOnInit(): void {
  }

}
