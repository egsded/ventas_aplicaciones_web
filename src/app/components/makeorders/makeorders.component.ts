import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PeopleService } from '../../services/people/people.service';
import { ProgramService } from '../../services/program/program.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-makeorders',
  templateUrl: './makeorders.component.html',
  styleUrls: ['./makeorders.component.css']
})
export class MakeordersComponent implements OnInit {

  level=0;
  validation = true;
  butons: any;

  formprogram = new FormGroup({
    name:new FormControl('',Validators.required),
    description: new FormControl('', Validators.required),
    instalation_date: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    database: new FormControl('', Validators.required),
    repository: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    people_id: new FormControl('', Validators.required),
    user: new FormControl(localStorage.getItem('user_id'), Validators.required)
  });

  constructor(public _peopleservice: PeopleService, public _programservice: ProgramService, private router:Router) { }

  ngOnInit(): void {
  }

  validator1(){
    if(this.formprogram.value.name == '' || this.formprogram.value.description == '' || this.formprogram.value.instalation_date == '' || this.formprogram.value.price == '' || this.formprogram.value.database == '' || this.formprogram.value.repository == '' || this.formprogram.value.type == ''){
      this.validation = false;
    }else{
      this.validation = true;
      this._peopleservice.getPeople().subscribe(data=>{
        this.butons = data;
      })
      this.level++
    }
  }

  validator2(id:any){
    this.formprogram.value.people_id = id;
    this._programservice.createOrder(this.formprogram.value).subscribe(data=>{
      this.router.navigateByUrl('/programs');
    });
  }

}
