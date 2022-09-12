import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-appointments',
  templateUrl: './book-appointments.component.html',
  styleUrls: ['./book-appointments.component.css']
})
export class BookAppointmentsComponent implements OnInit {

  genders = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' }
  ];

  d = new Date();

  wds = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  thisMonth = this.months[this.d.getMonth()];
  thisYear = this.d.getFullYear();

  d1 = new Date();
  d2 = new Date();
  d3 = new Date();
  d4 = new Date();
  d5 = new Date();
  d6 = new Date();

  nd1 = new Date(this.d1.setDate(this.d1.getDate() + 0));
  nd2 = new Date(this.d2.setDate(this.d2.getDate() + 1));
  nd3 = new Date(this.d3.setDate(this.d3.getDate() + 2));
  nd4 = new Date(this.d4.setDate(this.d4.getDate() + 3));
  nd5 = new Date(this.d5.setDate(this.d5.getDate() + 4));
  nd6 = new Date(this.d6.setDate(this.d6.getDate() + 5));

  nextSixDays = [
    { date: `${this.d.getDate() + 0}`, day: `${this.wds[this.nd1.getDay()]}`, id: `myDay_${0}` },
    { date: `${this.d.getDate() + 1}`, day: `${this.wds[this.nd2.getDay()]}`, id: `myDay_${1}` },
    { date: `${this.d.getDate() + 2}`, day: `${this.wds[this.nd3.getDay()]}`, id: `myDay_${2}` },
    { date: `${this.d.getDate() + 3}`, day: `${this.wds[this.nd4.getDay()]}`, id: `myDay_${3}` },
    { date: `${this.d.getDate() + 4}`, day: `${this.wds[this.nd5.getDay()]}`, id: `myDay_${4}` },
    { date: `${this.d.getDate() + 5}`, day: `${this.wds[this.nd6.getDay()]}`, id: `myDay_${5}` }
  ];

  timing = ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'];
  constructor() { }

  ngOnInit(): void { }

  bookingBox = true;
  messageBox = false;
  message = '';

  selectedTime = '';
  getValue(event: any) {
    this.selectedTime = event.target.value;
  }

  bookingFor = [
    { depart: 'Oxycodone' ,eat:'BeforeEat'},
    { depart: 'Aspirin'   ,eat:'AfterEat' },
    { depart: 'Cymbalta'  ,eat:'BeforeEat'},
    { depart: 'Codeine'   ,eat:'AfterEat' }
  ]

  action() {
    this.bookingBox = false;
    this.messageBox = true;
    this.message = 'Appointment Booked';
    setTimeout(
      () => {
        this.bookingBox = true;
        this.messageBox = false;
      }, 5000
    )
  }

}
