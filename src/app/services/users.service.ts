import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signup } from '../models/signup';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl:string = environment.apiUrl_test;
        

  constructor(private httpClient:HttpClient) {}
  getUser(id:number){
    return this.httpClient.get(this.apiUrl+`/users?username=${id}`);
  }

  signupUsers(signup:Signup){
    return this.httpClient.post(this.apiUrl+"/users",signup);
  }
  deleteUser(id:number){
    return this.httpClient.delete(this.apiUrl+`/users/${id}`);

  }

  onSubmitSignupForm(){
    
  }


}
