import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL: string = 'http://localhost:8000/api';

@Injectable({
  providedIn: 'root'
})
export class ProgramersService {

  constructor(private http: HttpClient) { }

  getProgramers(){
  	return this.http.get(API_URL + '/programers');
  }

  getProgramer(id:any){
  	return this.http.get(API_URL + '/programer/' + id);
  }
}
