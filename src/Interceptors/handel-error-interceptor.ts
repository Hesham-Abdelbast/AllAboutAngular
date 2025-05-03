import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { LogErrorResponseService } from "../Services/LogError/log-error-response.service";

@Injectable()

export class HandelErrorInterceptor implements HttpInterceptor{

    handelError = inject(LogErrorResponseService);
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(
                catchError(this.handelError.handelErrorResponse)
            );
    }

}