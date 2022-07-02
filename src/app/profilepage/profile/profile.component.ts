import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username =''; 
  _router: any;


  constructor(private usersService: UsersService, _router: Router) { 
    this.usersService.getUsername()
    .subscribe(
      data => this.username = data.toString(),
      error => this._router.navigate['/main/login']
    )
  }

  ngOnInit(): void {
  }

}
