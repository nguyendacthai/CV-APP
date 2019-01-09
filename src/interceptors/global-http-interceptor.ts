import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { throwError } from 'rxjs'

import {ToastrService} from 'ngx-toastr';

@Injectable()
export class GlobalHttpInterceptor implements HttpInterceptor {
  public constructor(private toastr: ToastrService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Clone the request to add the new header.
    const authReq = req.clone({headers: req.headers.set('headerName', 'headerValue')});

    return next.handle(authReq).pipe(
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          let message = '';

          switch (err.status) {
            case 400:
              message = 'Bad request';
              break;
            case 401:
              message = 'Credential is invalid';
              break;
            case 404:
              message = 'Not found';
              break;
            case 409:
              message = 'Conflict';
              break;
            case 500:
              message = 'Internal server error';
              break;
            default:
              message = 'Unknown error';
              break;
          }

          const errMessage = this.toastr.error(err.error.message, message);

          /*return throwError(message);*/
          // return Observable.throw(errMessage);
          return throwError(errMessage);
        }
      }) as any
    );
  }

}
