import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  apllicationForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });

  ngOnInit(): void {
  }
  SubmitForm(){
    console.log(this.apllicationForm.value);
  }

}
