import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL: string = 'http://localhost:8000/api';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http:HttpClient) { }

  getProyects(){
    return this.http.get(API_URL + '/programs/orders/' + localStorage.getItem('user_id'));
  }

  getAllOfProyect(id:any){
    return this.http.get(API_URL + '/programs/orders/all/' + id);
  }

  editOrder(form:any){
    return this.http.post(API_URL + '/programs/orders/edit', form);
  }
}
