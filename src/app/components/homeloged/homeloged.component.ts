import { Component, OnInit } from '@angular/core';
import { ProgramersService } from '../../services/programer/programers.service';

@Component({
  selector: 'app-homeloged',
  templateUrl: './homeloged.component.html',
  styleUrls: ['./homeloged.component.css']
})
export class HomelogedComponent implements OnInit {
	loged = false;
  githubuser= false;

  constructor(public _programerService:ProgramersService) { }

  ngOnInit(): void {
  	if(localStorage.token){
  		this.loged = true;
      this._programerService.getProgramer(localStorage.user_id).subscribe((data:any)=>{
        if(data.length<1){
          this.githubuser = true;
        }
      });
  	}
  }

}
