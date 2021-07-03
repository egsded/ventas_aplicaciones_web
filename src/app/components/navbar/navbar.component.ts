import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { PeopleService } from '../../services/people/people.service';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import * as countdown from 'countdown';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	closeResult = '';
	login = true;
  saved = false;
  error = '';
  htoken = false;
  private _success = new Subject<string>();

	public formLogin= new FormGroup({
		email:new FormControl('',Validators.required),
		password:new FormControl('',Validators.required)
	});

  formLogup = new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    confirm: new FormControl('', Validators.required)
  });

  constructor(private modalService: NgbModal, private http:HttpClient, public _userService:UserService, public _peopleService:PeopleService) { }

  ngOnInit(): void {
    this.onlogin();
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  onSubmit(){
    this._userService.login(this.formLogin.value).subscribe((data:any)=> {
      localStorage.setItem('token', data.token);
      this.onlogin();
      this._peopleService.getPeople().subscribe(data=>{
        console.log(data);
      });
    }, error=>this.onError(error.error.error));
  }

  prueba(){
    this._userService.autenticated().subscribe(data=>{
      console.log(data);
    }, error=>console.log(error));
  }

  onError(error:string){
    this.error = error;
    let currentdate = new Date();
      countdown(currentdate, (ts:any)=>{
        if(ts.seconds == 5){
          this.error = '';
        }
      });
  }

  onlogup(){
  	this.login = false;
    this.saved = false;
  }

  onlogin(){
    if(localStorage.token){
      this.htoken = true;
    } else{
      this.htoken = false;
    }
  }

  onSubmit2(){
    if(this.formLogup.value.password == this.formLogup.value.confirm){
      this.newUser();
    }else{
      this.onError("the password isn't the same");
    }
  }

  newUser(){
    return this._userService.regist(this.formLogup.value).subscribe(data=>{
      this.saved = true;
      let currentdate = new Date();
      countdown(currentdate, (ts:any)=>{
        if(ts.seconds == 5){
          this.saved = false;
          this.login = true;
        }
      });
    });
  }

  onClose(){
    this.login = true;
  }

  onLogout(){
    localStorage.removeItem('token');
    this.onlogin();
  }
}
