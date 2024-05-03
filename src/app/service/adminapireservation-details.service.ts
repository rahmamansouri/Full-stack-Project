
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import {environment} from '../../environments/environment'



@Injectable({
  providedIn: 'root',
})
export class AdminapireservationDetailsService {
  baseUri: string = 'http://localhost:4000/adminapireservationDetails';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}
  // Create



  createreservationDetails(data): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }



createreservationDetails1(data): Observable<any> {
    let url = `${this.baseUri}/create1`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  
  createreservationDetails2(data): Observable<any> {
    let url = `${this.baseUri}/create2`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  createreservationDetails3(data): Observable<any> {
    let url = `${this.baseUri}/create3`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  createreservationDetails4(data): Observable<any> {
    let url = `${this.baseUri}/create4`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  createreservationDetails5(data): Observable<any> {
    let url = `${this.baseUri}/create5`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  createreservationDetails6(data): Observable<any> {
    let url = `${this.baseUri}/create6`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  createreservationDetails7(data): Observable<any> {
    let url = `${this.baseUri}/create7`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  createreservationDetails8(data): Observable<any> {
    let url = `${this.baseUri}/create8`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  createreservationDetails9(data): Observable<any> {
    let url = `${this.baseUri}/create9`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }







  // Get all reservationDetailss
  getreservationDetailss() {
    return this.http.get(`${this.baseUri}`);
  }
  // Get reservationDetails
  getreservationDetails(id): Observable<any> {
    let url = `${this.baseUri}/read/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }
  

  getreservationDetailsssss(id): Observable<any> {
    let url = `${this.baseUri}/readdetailreservations/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  // Update reservationDetails
  updatereservationDetails(id, data): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http
      .put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  // Delete reservationDetails
  deletereservationDetails(id): Observable<any> {
    let url = `${this.baseUri}/delete/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}