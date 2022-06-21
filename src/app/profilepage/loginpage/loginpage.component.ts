import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  UserList: Login[] = []; 

  usersForm = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(5)
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(5)
    ]),
    id: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
