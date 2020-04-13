import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  { path: 'landing', component: LandingComponent},
  { path: 'account', component: AccountComponent},
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo:"/landing", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
