import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeloged',
  templateUrl: './homeloged.component.html',
  styleUrls: ['./homeloged.component.css']
})
export class HomelogedComponent implements OnInit {
	loged = false;

  constructor() { }

  ngOnInit(): void {
  	if(localStorage.token){
  		this.loged = true;
  	}else{
  		this.loged = false;
  	}
  }

}
