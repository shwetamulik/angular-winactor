import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
submitted:Boolean=false;
form=new FormGroup({
  username:new FormControl('',Validators.required),
  password:new FormControl('',[Validators.required,Validators.minLength(6)])
})
  constructor(private router: Router,
    ) { }

  ngOnInit(): void {
  }


onSubmit(){
this.submitted=true;
console.log(this.form.value);
this.router.navigateByUrl('/home');
}
}
