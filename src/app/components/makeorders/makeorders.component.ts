import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-makeorders',
  templateUrl: './makeorders.component.html',
  styleUrls: ['./makeorders.component.css']
})
export class MakeordersComponent implements OnInit {

  formprogram = new FormGroup({
    name:new FormControl('',Validators.required),
    description: new FormControl('', Validators.required),
    instalation_date: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    database: new FormControl('', Validators.required),
    repository: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    people_id: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

}
