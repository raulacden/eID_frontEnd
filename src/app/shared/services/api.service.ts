import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from '../user';
import { Client } from '../client';
import { ClientDetail } from '../clientDetail';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getUser(): Observable<User> {
    return this.http
      .get<User>(this.apiURL + '/login')
      .pipe(retry(1), catchError(this.handleError));
  }

  getList(): Observable<Client[]> {
    return this.http
      .get<Client[]>(this.apiURL + '/clients')
      .pipe(
        retry(1), 
        catchError(this.handleError)
        );
  }

  getDetails(url: string): Observable<ClientDetail> {
    return this.http
      .get<ClientDetail>(url)
      .pipe(
        retry(1), 
        catchError(this.handleError)
        );
  }
  
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}
