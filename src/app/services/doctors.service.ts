import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Doctor } from '../models/doctor.model';


@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  apiUrl_test2: string = environment.apiUrl_test;
  constructor(private httpClient:HttpClient) {}
  getDoctorList(){
    return this.httpClient.get< Array<Doctor> >(this.apiUrl_test2+"/doctors");
  }

  createDoctor(Doctor:Doctor){
    return this.httpClient.post(this.apiUrl_test2+"/doctors",Doctor);
  }
  deleteDoctor(id:number){
    return this.httpClient.delete(this.apiUrl_test2+`/doctors/${id}`);

  }
  updateDoctor(doctor:Doctor){
    return this.httpClient.put(this.apiUrl_test2+`/doctors/${doctor.id}`,doctor);
  }
}
