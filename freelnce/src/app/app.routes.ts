import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Signup } from './signup/signup';

import { Acceuil } from './acceuil/acceuil';
import { Login } from './login/login';



export const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component:Login},
  {path: 'signup',component:Signup },

  {path: 'acceuil', component: Acceuil},
 
    

]
  @NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
  
