import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AboutComponent } from './about/about.component';
import { AccountDetailComponent } from './account-detail/account-detail.component'


const routes: Routes = [
  { path: 'account', component: AccountComponent},
  { path: 'about', component: About},
  { path: 'user/:id', component: AccountDetailComponent },
  { path: '**' , component:NotFoundComponent},
  { path: '', redirectTo:"/account", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
