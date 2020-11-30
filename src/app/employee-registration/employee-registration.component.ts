import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css'],
})
export class EmployeeRegistrationComponent implements OnInit {
  name: string = '';
  position: string = '';
  about: string = '';
  date: string = '';

  data:any=[];
  constructor() {}

  ngOnInit(): void {}

  register() {
    let userDetails={
      name:this.name,
      position:this.position,
      about:this.about,
      date:this.date
    }
    this.data= JSON.parse(localStorage.getItem("user")|| '{}');
    this.data.push(userDetails)
    console.log(this.data)

    localStorage.setItem("user",JSON.stringify(this.data))
      
  }
};
