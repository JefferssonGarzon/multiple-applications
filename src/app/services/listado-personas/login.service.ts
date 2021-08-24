import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  token:string;
  constructor(private router: Router) { }

  login(email:string, password:string){
    firebase.auth().signInWithEmailAndPassword(email,password).then(
      response => {
        firebase.auth().currentUser.getIdToken().then(
          token =>{
            this.token = token; 
            this.router.navigate(['/listado']);
        })
      }
    )
  }

  getToken(){
    return this.token;
  }

  salir(){
    firebase.auth().signOut().then( () => {
      this.token = null;
      this.router.navigate(['/login']);   
    }).catch( error => console.log('Error logout:' + error));
  }
}
