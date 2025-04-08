import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '@catalog/products.service';

@Component({
  selector: 'bot-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  ngOnInit() { }

  get cartItems() {
    return this.productsService.cart;
  }

  get cartTotal(): number {
    return this.productsService.getCartTotal();
  }

  removeFromCart(product: Product) {
    this.productsService.removeFromCart(product);
  }

  getImageUrl(product: Product) {
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }
}
