import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, 
  RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      const router = inject(Router)

      const token = JSON.parse(localStorage.getItem("token") || "{}")
      if(token){
        return true;
      } else {
        // router.navigate(["login"])
        // return false
        return true
      }
    
  }
  
}
