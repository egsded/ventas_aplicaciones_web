import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor{
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
		if(localStorage.token){
			req = req.clone({
				setHeaders: {
					Authorization: `Bearer ${localStorage.token}`
				}
			});
		}
		return next.handle(req);
	}
}
