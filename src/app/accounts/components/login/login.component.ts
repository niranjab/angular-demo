import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string="";
  password:string="";
  loginForm:FormGroup | any;

  constructor() { }

  ngOnInit(): void {
  }

  clear()
  {
    this.username="";
    this.password="";
  }
  
  login(loginForm:FormGroup)

  {
    
    if(loginForm.valid)
    {
      alert("user logged in successfully")
    }

  }

}
