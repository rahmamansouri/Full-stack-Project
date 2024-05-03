
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';







import { Criteres } from 'src/app/model/criteres';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class AdminapicriteresService {
  baseUri: string = 'http://localhost:4000/adminapicriteres';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private router: Router) {}
  // Create




  BACKEND_URL: string = 'http://localhost:4000/adminapicriteres';
  public err = new BehaviorSubject<any>(null);

  //

  addPost(hotel_id: string, critere: string,valeur: string,description: string, imgpath: File, postDate: Date) {
    const postData = new FormData();
    postData.append("hotel_id", hotel_id);
    postData.append("critere", critere);
    postData.append("valeur", valeur);
    postData.append("description", description);
    postData.append("image", imgpath, critere);
    postData.append("postDate", postDate.toString());
    this.http
      .post<{ message: string; post: Criteres }>(
        this.BACKEND_URL+"/create",
        postData
      )
      .subscribe(responseData => {
        this.err.next(null)
        this.router.navigate(["/"]);


      }),
      err => {
        this.err.next(err)
        console.log(err)
      }
  }



  //





  createcriteres(data): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }
  // Get all criteress
  getcriteress() {
    return this.http.get(`${this.baseUri}`);
  }
  // Get criteres
  getcriteres(id): Observable<any> {
    let url = `${this.baseUri}/read/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  



  getcriteresssss(id): Observable<any> {
    let url = `${this.baseUri}/readhotel/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }









  // Update criteres
  updatecriteres(id, data): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http
      .put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  // Delete criteres
  deletecriteres(id): Observable<any> {
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