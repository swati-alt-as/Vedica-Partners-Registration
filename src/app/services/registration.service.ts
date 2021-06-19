import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  rooturl = "https://fabloplatforms-vp-backend.zeet.app/Investor/"

  constructor(private http: HttpClient) { }

  // Error handling 
  handleError(error: HttpErrorResponse) {
    // console.log(error)
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getAllVisitorsdata(): Observable<any> {
    
    return this.http.get(this.rooturl + "v1/getAllVisitors")
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getAllInvestorsdata(): Observable<any> {
    
    return this.http.get(this.rooturl + "v1/getAllInvestors")
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getTotalBalancedata(data): Observable<any> {
    
    return this.http.get(this.rooturl + "v1/getTotalBalance", data)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
}
