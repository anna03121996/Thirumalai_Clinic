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
      class:"fa fa-facebook",
      url:"https://www.facebook.com/"
    },{
      class:"fa fa-instagram",
      url:"https://www.instagram.com/"
    },{
      class:"fa fa-linkedin",
      url:"https://www.linkedin.com/"
    },{
      class:"fa fa-twitter",
      url:"https://twitter.com/"
    },{
      class:"fa fa-youtube",
      url:"https://www.youtube.com/"
    }
  ]
  ngOnInit(): void {
  }

}
