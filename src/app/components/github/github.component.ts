import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProgramersService } from '../../services/programer/programers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  formGit = new FormGroup({
    gituser:new FormControl('', Validators.required),
    people_id:new FormControl('', Validators.required)
  });

  constructor(public _programerService: ProgramersService, private router:Router) { }

  ngOnInit(): void {
  }

  gitsave(){
    this.formGit.value.people_id = localStorage.getItem('user_id');
    this._programerService.makeUser(this.formGit.value).subscribe(data=>{
      this.router.navigateByUrl('/inicio');
    });
  }

}
