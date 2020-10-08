import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

 cartItems = []; 
  cartTotal = 0;

  constructor(
    private messengerService: MessengerService,
    private cartServices: CartService
    ) { }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItem();
}

handleSubscription() {
  this.messengerService.getMsg().subscribe((product: Product) => {
    this.loadCartItem();
  });
}

loadCartItem() {
  return this.cartServices.getCartItem().subscribe((items: CartItem[]) => {
    this.cartItems = items;
    this.calculateTotal();
  });
}

calculateTotal() {
  this.cartTotal = 0;
 this.cartItems.forEach(item => {
   this.cartTotal += (item.qty * item.price)
 });
}

}
