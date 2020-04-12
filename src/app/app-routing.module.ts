import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import {AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'account', component: AccountComponent},
  { path: 'about', component: About},
  { path: '**' , component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
