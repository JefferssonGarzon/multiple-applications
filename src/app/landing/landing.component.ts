import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  //  firebase.initializeApp({
  //   apiKey: "AIzaSyCFhTR9rFM-lqfwzaN9FyIpWlG_7BC3Xp4",
  //   authDomain: "listado-personas-3e56b.firebaseapp.com"
  //  })
  }

}
