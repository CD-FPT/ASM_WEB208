import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interface/user';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  API_URL: string = ' http://localhost:8088/api/auth'

  signup(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.API_URL + '/signup', user)
  }
  login(role: string) {
    if (role === "admin") {
      this.router.navigate(['/admin'])
    } else if (role === "member") {
      this.router.navigate(['/'])
    }
  }
  signin(user: any): Observable<any> {
    return this.http.post(`${this.API_URL}/signin`, user).pipe(
      tap((response: any) => {
        if (response.accessToken) {
          localStorage.setItem('credential', JSON.stringify(response));
          console.log( JSON.stringify(response));
        }
      })
    );
  }

  isAuthenticated(): any {
    return JSON.parse(localStorage.getItem('credential')!) || {};
  }
  getRole(): string {
    const credential = JSON.parse(localStorage.getItem('credential')!) || {};
    return credential?.user?.role || '';
  }
  signout(): void {
    localStorage.removeItem('credential');
    this.router.navigate(['/'])
  }
}
