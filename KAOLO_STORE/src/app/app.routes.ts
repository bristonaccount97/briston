import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { NgModule } from '@angular/core';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: '**', redirectTo: '' },
];

@NgModule({
  //
  imports: [RouterModule.forRoot(routes)],
//  exports: [RouterModule]
})
export class AppRoutingModule {}