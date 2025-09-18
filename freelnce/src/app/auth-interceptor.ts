import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   const publicUrls =[
    '/api/auth/register',
    '/api/auth/activate',
    '/api/auth/login'
   ];
   if(publicUrls.some(url => req.url.includes(url))) {
    return next.handle(req);
   }
   const token = localStorage.getItem('token');

   if(token) {
    const clonedReq = req.clone({
      setHeaders: {
        Authorization:`Bearer ${token}`
      }
    });
    return next.handle(clonedReq);
   }
   return next.handle(req);
  }
}
