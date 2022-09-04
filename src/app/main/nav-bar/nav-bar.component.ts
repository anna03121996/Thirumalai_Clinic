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
      route:""
    },{
      option:"Book Appointment",
      route:""
    },{
      option:"About Us",
      route:""
    },{
      option:"Why Thirumalai",
      route:""
    }
    ,{
      option:"Treatments",
      route:""
    },{
      option:"Contact Us",
      route:""
    }
  ];
  
  ngOnInit(): void {
  }

}
