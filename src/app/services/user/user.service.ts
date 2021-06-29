import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL: string = 'http://localhost:8000/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  regist(form: any){
  	return this.http.post(API_URL + '/register', form);
  }

  login(form: any){
  	return this.http.post(API_URL + '/login', form);
  }

  autenticated(){
  	return this.http.get(API_URL + '/authenticated');
  }
}
