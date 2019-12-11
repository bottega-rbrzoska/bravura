import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { CanActivate } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  private userDataSubj$ = new BehaviorSubject(null);
  userData$ = this.userDataSubj$.asObservable();
  userRoles$ = this.userDataSubj$.pipe(map(data => data ? data.roles : null));

  get userData() {
    return this.userDataSubj$.getValue();
  }

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('config');

    if (token) {
      this.userDataSubj$.next(JSON.parse(token));
    }
  }

  login() {
    this.http.get('http://localhost:5000/auth').subscribe(val => {
      this.userDataSubj$.next(val);
      localStorage.setItem('config', JSON.stringify(val));
    });
  }

  logout() {
    this.userDataSubj$.next(null);
    localStorage.removeItem('config');
  }

  canActivate() {
    return !!this.userData;
  }



}
