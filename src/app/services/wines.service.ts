import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Wine } from '../models/wine.model';


@Injectable({
  providedIn: 'root'
})
export class WinesService {
  apiUrl: string = environment.apiUrl;
  constructor(private httpClient:HttpClient) { 
  }
  getWinelist(){
    return this.httpClient.get< Array<Wine> >(this.apiUrl+"/winelist");
  }
}
