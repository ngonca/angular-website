import { Injectable } from '@angular/core';
import { HttpClient,HttpParams} from '@angular/common/http';
import { Signup } from '../models/signup';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login';


@Injectable({
  providedIn: 'root'
})

export class UsersService {
  apiUrl:string = environment.apiUrl_test;
        

  constructor(private httpClient:HttpClient) {}

   submitSignup(signup:Signup){
    return this.httpClient.post(this.apiUrl+"/users",signup);

  }

    login(login:Login){
    return this.httpClient.post(this.apiUrl+"/loginpage",login);
  }


  getUsername() {
    return this.httpClient.get('http://localhost:3000/users/username', {
      observe: 'body',
      //params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }

 // deleteUser(id:number){
   // return this.httpClient.delete(this.apiUrl+`/users/${id}`);
 // }







}
