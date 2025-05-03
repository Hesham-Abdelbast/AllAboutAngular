import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogErrorResponseService {

  constructor() { }

  handelErrorResponse(error:HttpErrorResponse):Observable<any>{
    if(error.status === 0){
      //client Side error
    }
    else{
      //server Side error
    }
    return throwError(()=>error.message);
  }
}
