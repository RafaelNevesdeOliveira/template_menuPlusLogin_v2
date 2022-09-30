import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, pluck, retry, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GenericCrudServiceService {
  constructor(private http: HttpClient) {}

  genericGetApiData<T>(apiUrl: string, options?: any): Observable<any> {
    return this.http.get<T>(apiUrl, options).pipe(
      // tap((data) => console.log(data)),
      pluck('data'),
      take(1),
    );
  }

  genericGetApiDataById<T>(apiUrl: string, options?: any): Observable<any> {
    return this.http.get<T>(apiUrl, options).pipe(
      // tap((data) => console.log(data)),
      take(1),
    );
  }

  genericPostApiData<T>(
    apiUrl: string,
    payload?: any,
    options?: any
  ): Observable<any> {
    return this.http.post<T>(apiUrl, payload, options).pipe(
      tap((data) => console.log(data)),
      retry(2),
      catchError((error) => this.errorHandler(error))
    );
  }

  genericPutApiData<T>(
    apiUrl: string,
    payload?: any,
    options?: any
  ): Observable<any> {
    return this.http.put<T>(apiUrl, payload, options).pipe(
      tap((data) => console.log(data)),
      retry(2),
      catchError((error) => this.errorHandler(error))
    );
  }

  genericDeleteApiData<T>(apiUrl: string): Observable<any> {
    return this.http.delete<T>(apiUrl).pipe(
      tap((data) => console.log(data)),
      retry(2),
      catchError((error) => this.errorHandler(error))
    );
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
