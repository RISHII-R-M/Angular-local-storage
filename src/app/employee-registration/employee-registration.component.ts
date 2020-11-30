import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  data: any = [{}];
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  register() {
    var userDetails = {
      name: this.name,
      position: this.position,
      about: this.about,
      date: this.date,
    };
    this.data = JSON.parse(localStorage.getItem('user') || '{}');

    this.data = [userDetails, ...this.data];

    console.log(this.data);

    localStorage.setItem('user', JSON.stringify(this.data));
    this.openSnackBar("Thanks For Registering!!!","")
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
