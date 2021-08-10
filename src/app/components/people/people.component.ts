import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PeopleService } from '../../services/people/people.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  closeResult = '';

	form = new FormGroup({
		name:new FormControl('',Validators.required)
	});

  filter = new FormControl('',Validators.required);

  people:any;
  deleteid = "";
  name = "";

  constructor(public _peopleservice: PeopleService, private modalService: NgbModal) { this.peoples()}

  ngOnInit(): void {
  }

  onSubmit(){
  	this._peopleservice.createPeople(this.form.value).subscribe(data=>{
      this.peoples();
    });
  }

  peoples(){
    this._peopleservice.getPeople().subscribe(data=>{
      this.people = data;
    });
  }

  deletePerson(id:any){
    this.deleteid = id;
  }

  searchPeople(){
    if(this.name != ""){
      this._peopleservice.findPeople(this.name).subscribe(data=>{
        this.people = data;
      });
    }else{
      this.peoples();
    }
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

  si(){
    this._peopleservice.deletePeople(this.deleteid).subscribe(data=>{
      this.peoples();
    })
  }

}
