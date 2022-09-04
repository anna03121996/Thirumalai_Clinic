import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  social = [
    {
      socialMediaName:"Facebook",
      url:"https://www.facebook.com/"
    },{
      socialMediaName:"Instagram",
      url:"https://www.instagram.com/"
    },{
      socialMediaName:"Linkedin",
      url:"https://www.linkedin.com/"
    },{
      socialMediaName:"Twitter",
      url:"https://twitter.com/"
    },{
      socialMediaName:"Youtube",
      url:"https://www.youtube.com/"
    }
  ]
  ngOnInit(): void {
  }

}
