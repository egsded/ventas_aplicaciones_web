import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../../services/program/program.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {

  proyects:any;
  closeResult = '';
  proyect:any;
  edit = false;

  public formEdit = new FormGroup({
    proyect_id: new FormControl('', Validators.required),
    proyect_name: new FormControl('', Validators.required),
    proyect_description: new FormControl('', Validators.required),
    instalation_date: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    database: new FormControl('', Validators.required),
    repository: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    debt: new FormControl('', Validators.required),
    order_date: new FormControl('', Validators.required),
    date_finished: new FormControl(''),
    customer: new FormControl('', Validators.required),
    whats: new FormControl('', Validators.required)
  });

  constructor(public _programService:ProgramService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getTheProyects();
  }

  getTheProyects(){
    this._programService.getProyects().subscribe(data=>{
      this.proyects = data;
    });
  }

  open(id:any,content:any) {
    this._programService.getAllOfProyect(id).subscribe((data:any)=>{
      this.proyect = data[0];
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
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

  functionEdit(){
    this.edit = true;
  }

  saveEdit(){
    this.formEdit.value.proyect_id = this.proyect.program_id;
    this._programService.editOrder(this.formEdit.value).subscribe(data=>{
      this.getTheProyects();
    });
  }
}
