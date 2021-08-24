import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/listado-personas/login.service';

import firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService){ }
  ngOnInit(): void {
    if(!firebase.apps.length){
      firebase.initializeApp({
        apiKey: "AIzaSyCFhTR9rFM-lqfwzaN9FyIpWlG_7BC3Xp4",
        authDomain: "listado-personas-3e56b.firebaseapp.com"
      })
    }else{
      firebase.app();
    }
  }

  login(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.loginService.login(email, password);
  }

}
