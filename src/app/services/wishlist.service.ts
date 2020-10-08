import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { wishlistUrl } from "../config/api";

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  getWishlist() {
    return this.http.get(wishlistUrl).pipe(
      map((result: any[]) => {
        let productId = []
        result.forEach(item => productId.push(item.id))
        return productId
      })
    );
  }
  

  addToWishlist(productId) {
    return this.http.post(wishlistUrl, {id: productId});
  }

  removeFromWishlist(productId) {
    return this.http.delete(wishlistUrl + '/' + productId);
  }

}
