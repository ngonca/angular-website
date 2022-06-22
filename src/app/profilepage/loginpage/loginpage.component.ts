import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { Login } from 'src/app/models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

 
  // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
  loginForm = new FormGroup({
    username: new FormControl('',[
      Validators.required,
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}') 
    ]),
    id: new FormControl('')
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSubmitloginForm(){
    console.log(this.loginForm.valid);
    this.router.navigate(['/profile']);
  };

}
