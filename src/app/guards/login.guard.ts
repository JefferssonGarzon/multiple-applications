import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/listado-personas/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {



  constructor(private loginService: LoginService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.loginService.getToken() != null){
      console.log('Entró');
      return true;
    }else{
      console.log('No entró');
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
