import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize, Observable } from "rxjs";

@Injectable()

export class LogSuccessReq implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            finalize(()=>{
                console.log('%cSuccess Req', 'color: red;font-size:25px')
            })
        );
    }

}