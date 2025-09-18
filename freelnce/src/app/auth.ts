import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface RegisterRequest{
  name: string;
  email: string;
  password: string;
  role: string;
  competences: string;
  experience :string;
}
export interface LoginRequest{
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private apiUrl = 'http:/localhost:8080/apia/auth';

  constructor(private http: HttpClient){}
   register(request: RegisterRequest): Observable<string> {
    return this.http.post('${this.apiUrl}/register',request,{responseType:'text'
    });
   }
   activate(email: string, code: string){
    return this.http.get(
      `${this.apiUrl}/activate?email = ${email}&code = ${code}`,
      {responseType :'text'}
    );
   }
   login(credentials: {email: string, password: string}): Observable <{token: string}> {
    return this.http.post<{token: string}>('${this.apiUrl}/login', credentials);
   }
   isAuthenticated(): boolean{
    return !!localStorage.getItem('token');
   }
   logout(): void {
    localStorage.removeItem('token');
   }
   getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get('${this.apiUrl}/donnees', {headers});
   }
}
