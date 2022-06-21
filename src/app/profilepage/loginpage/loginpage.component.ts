import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  UserList: Login[] = []; 
  // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
  loginForm = new FormGroup({
    username: new FormControl('',[
      Validators.required,
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.maxLength(12),
      Validators.minLength(5)
    ]),
    id: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }
  onSubmitloginForm(){
    console.log(this.loginForm.valid);
    
  };

}
