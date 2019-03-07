import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  form = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.minLength(3)]),
    password : new FormControl('',Validators.required),
  })

  get email(){
    return this.form.get('email')
  }
  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log('Form Values', this.form.get('email'))
  }

}
