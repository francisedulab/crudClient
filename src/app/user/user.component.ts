import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm!: FormGroup;
  userModel = { 
    id: 500,
    firstName: 'Francis',
    lastName: 'Pinto'
    };
  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      id: new FormControl(this.userModel.id, [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
      ]),
      
    })
  }

}
