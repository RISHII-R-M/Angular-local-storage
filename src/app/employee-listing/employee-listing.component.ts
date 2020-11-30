import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.css']
})
export class EmployeeListingComponent implements OnInit {

  constructor() { }
data:any
  ngOnInit(): void {
   this.data= JSON.parse(localStorage.getItem("user")|| '{}');

  
  }
delete(i:number){
  this.data.splice(i  , 1);
  localStorage.setItem("user",JSON.stringify(this.data))
}

}
