import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '@catalog/products.service';
import { CartService } from '@core/site-header/cart.service';

@Component({
  selector: 'bot-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit() { }

  get cartItems() {
    return this.cartService.cart;
  }

  get cartTotal(): number {
    return this.cartService.getCartTotal();
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
  }

  getImageUrl(product: Product) {
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }
}
