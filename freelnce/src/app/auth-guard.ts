import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(
    private authService : Auth,
    private router : Router
  ){}

  canActivate(): boolean {
    if(!this.authService.isAuthenticated()){
      return false;
    }
    return true;
  }
}
