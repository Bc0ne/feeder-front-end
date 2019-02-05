import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule]
})
export class AppRoutingModule { }
