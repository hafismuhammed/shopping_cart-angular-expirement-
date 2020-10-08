import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { NavComponent } from './component/shared/nav/nav.component';
import { ShopingCartComponent } from './component/shoping-cart/shoping-cart.component';
import { FiltersComponent } from './component/shoping-cart/filters/filters.component';
import { ProductListComponent } from './component/shoping-cart/product-list/product-list.component';
import { CartComponent } from './component/shoping-cart/cart/cart.component';
import { CartItemComponent } from './component/shoping-cart/cart/cart-item/cart-item.component';
import { ProductsComponent } from './component/shoping-cart/product-list/products/products.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { PageNotFountComponent } from './component/shared/page-not-fount/page-not-fount.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShopingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductsComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFountComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
