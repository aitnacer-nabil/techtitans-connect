import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sin-up',
  templateUrl: './sin-up.component.html',
  styleUrls: ['./sin-up.component.css']
})
export class SinUpComponent implements OnInit {

  constructor() { }
  formsinup = new FormGroup({  
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    country: new FormControl(''),
    userName: new FormControl(''),
    dateOfBirth: new FormControl('')});


  ngOnInit(): void {
  }
  submitForm(){
    console.log(this.formsinup.value);
  }

}
