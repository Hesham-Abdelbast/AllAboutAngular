import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable()

export class BaseServiceService {
  http =inject(HttpClient);

  GetRequest<T>(url:string):Observable<T>{
    return this.http.get<T>(url)
    //.pipe(catchError(this.HandelError));
  }
}
