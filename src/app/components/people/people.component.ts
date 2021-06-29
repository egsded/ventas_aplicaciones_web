import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PeopleService } from '../../services/people/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

	form = new FormGroup({
		name:new FormControl('',Validators.required),
		username:new FormControl('',Validators.required),
	});

  constructor(public _peopleservice: PeopleService) {
  	this._peopleservice.getPeople().subscribe(data=>{
  		console.log(data);
  	});
  }

  ngOnInit(): void {
  }

  onSubmit(){
  	console.log(this.form.value);
  }

}
