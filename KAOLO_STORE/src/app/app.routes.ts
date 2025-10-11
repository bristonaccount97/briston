import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: Login },
];

@NgModule({
  //
  imports: [RouterModule.forRoot(routes)],
//  exports: [RouterModule]
})
export class AppRoutingModule {}