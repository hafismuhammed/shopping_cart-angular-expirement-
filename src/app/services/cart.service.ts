import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { cartUrl } from '../config/api';
import { CartItem } from '../models/cart';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItem(): Observable<CartItem[]>{
    //TODO: Mapping the obtained result to our cart item property {pipe() and map()}
     return this.http.get<CartItem[]>(cartUrl).pipe(
       map((result: any[]) => {
         let cartItem: CartItem[] = []
        
         for (let item of result) {
           let productIsExicsts = false;
         

          for (let i in cartItem) {
            if (cartItem[i].productId === item.product.id){
                cartItem[i].qty++
                productIsExicsts = true
                break;
            }
          }
          if (!productIsExicsts) {
            cartItem.push(new CartItem(item.id, item.product));
          }
        }

         return cartItem;
        })
      
     );
  }

  addProductToCart(product: Product): Observable<any> {
    return this.http.post(cartUrl, { product });
  }

}
