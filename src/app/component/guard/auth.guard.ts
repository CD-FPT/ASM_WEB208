import { Observable } from "rxjs";
import { AuthService } from "../service/auth.service"
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class authGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const credential = this.authService.isAuthenticated();
    if (credential?.user?.role == 'admin') {
      // this.router.navigate(['/admin'])
      return true
    } else {
      this.router.navigate(['/signin'])
      return false
    }
  }
};
