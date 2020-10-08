import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { PageNotFountComponent } from './component/shared/page-not-fount/page-not-fount.component';
import { ShopingCartComponent } from './component/shoping-cart/shoping-cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'shope', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shope', component: ShopingCartComponent },
  { path: '**', component: PageNotFountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
