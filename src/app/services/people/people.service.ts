import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL: string = 'http://localhost:8000/api';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople(){
  	return this.http.get(API_URL + '/people');
  }

  createPeople(form:any){
    return this.http.post(API_URL + '/people/create',form);
  }

  findPeople(name:any){
    return this.http.get(API_URL + '/find/people/' + name);
  }

  deletePeople(id:any){
    return this.http.get(API_URL + '/people/delete/' + id);
  }
}
