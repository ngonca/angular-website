import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Login } from 'src/app/models/login';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  color: string = 'red';

  // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
    ]),
    id: new FormControl('')
  });
  private _activatedRoute: ActivatedRoute | null | undefined;

  constructor(private router: Router, private userservice: UsersService) {}

  ngOnInit(): void {}

  onSubmitloginForm() {
    console.log(this.loginForm.valid);
    this.router.navigate(['/profile'],{relativeTo: this._activatedRoute});
    this.login();
  };


  isValid(controlName: any) {
    return this.loginForm.get(controlName)?.invalid && this.loginForm.get(controlName)?.touched;
  };


  login() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this.userservice.login(this.loginForm.value)
        .subscribe(
          data => {
            console.log(data);
            localStorage.setItem('token', data.toString());
          },
          error => { }
        )
    }
  }




}
