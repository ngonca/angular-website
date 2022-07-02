import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  successMessage: string = "";
  color: string = 'red';

  signupForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.maxLength(15)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
    ]),
    repeatPassword: new FormControl('', [
      this.passValidator,
    ]),
    id: new FormControl('')
  });

  constructor(
    private router: Router,
    private usersService: UsersService,
    private _activatedRoute: ActivatedRoute) {


    this.signupForm.controls['password'].valueChanges
      .subscribe(
        x => this.signupForm.controls['repeatPassword'].updateValueAndValidity()
      );
  }

  ngOnInit(): void {
  }

  onSubmitSignupForm() {
    console.log(this.signupForm.valid);
    this.register();
    this.router.navigate(['/profile']);
  };

  isValid(controlName: any) {
    return this.signupForm.get(controlName)?.invalid && this.signupForm.get(controlName)?.touched;
  };


  passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const cnfpassValue = control.value;

      const passControl = control.root.get('password');
      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== cnfpassValue || passValue === '') {
          return {
            isError: true
          };
        }
      }
    }

    return null;
  }

  register() {
    console.log(this.signupForm.value);
    if (this.signupForm.valid) {
      this.usersService.submitSignup(this.signupForm.value)
        .subscribe(
          data => {
            this.successMessage = "Signup success"
          },
          error => {
            this.successMessage = "some error"
          }
        )
    }










    
  }









}