import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../../services/program/program.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {

  proyects:any;

  constructor(public _programService:ProgramService) {}

  ngOnInit(): void {
    this._programService.getProyects().subscribe(data=>{
      this.proyects = data;
      console.log(data);
    })
  }

}
