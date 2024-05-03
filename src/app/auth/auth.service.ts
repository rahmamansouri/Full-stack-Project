import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

import {environment} from '../../environments/environment'
//const BACKEND_URL = environment.apiUrl + "/user/"


BACKEND_URL : "http://localhost:4000/clientapiusers";
import { AuthData } from './users.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BACKEND_URL : "http://localhost:4000/clientapiusers";
  baseUri: string = 'http://localhost:4000/clientapiusers';
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private userId: string;

  private roleid: string;
  private role: string;
  private value: string;


  private authStatusListener = new Subject<boolean>();
  public err = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient, private router: Router) { }


  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getUserId() {
    return this.userId;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }


  signIn(
    name: string,email: string, password: string,
    role: string,
    profileAnciennete: string,
    profileGamme: string,
    profileFrequence: string,
    profileFamille: string,
    profilePeriode: string,
    profileFidelite: string  

  ) {
    const authData: AuthData = {
      name: name,
      email: email,
      password: password,
      role:"",
      profileAnciennete: profileAnciennete,
      profileGamme: profileGamme,
      profileFrequence: profileFrequence,
      profileFamille: profileFamille,
      profilePeriode: profilePeriode,
      profileFidelite: profileFidelite  


     };
     return this.http
     .post<any>(`${this.baseUri}/login`, authData)
     .subscribe(response => {

        this.err.next(null)

        const token = response.token;
        this.token = token;
        if (token) {
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.userId = response.userId;
          this.roleid=response.roleId;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);

          this.saveAuthData(token, expirationDate, this.userId);
          if(this.roleid==="client")
          {
          this.router.navigate(["/clientlistreservation"]);
          }
          if(this.roleid==="admin")
          {
          this.router.navigate(["/adminlisthotel"]);
          }
          if(this.roleid==="agence")
          {
          this.router.navigate(["/agencelistchambre"]);
          }
        }
      },
        err => {
          this.err.next(err)
          console.log(err)
        });
  }


  createUser(
    name: string,email: string, password: string,
    role: string,
    profileAnciennete: string,
    profileGamme: string,
    profileFrequence: string,
    profileFamille: string,
    profilePeriode: string,
    profileFidelite: string  

  ) {

    




  }



  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(["/"]);
  }


  autoAuthUser() {
    const authInformation = this.getAuthData();

    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();

    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.userId = authInformation.userId;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const userId = localStorage.getItem("userId");
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      userId: userId
    }
  }



  private setAuthTimer(duration: number) {

    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date, userId: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
    localStorage.setItem("userId", userId);
  }


  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userId");

    localStorage.removeItem("profile");
    localStorage.removeItem("uname");
  }

}
