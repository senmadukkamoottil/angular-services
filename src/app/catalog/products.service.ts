import { Injectable } from '@angular/core';
import { Product } from "@shared/product.model";
import { productsArray } from './products-data';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  products: Product[] = [];
  cart: Product[] = [];
  searchTerm: string = '';

  constructor() {
    this.products = productsArray;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getFilteredProducts(searchTerm: string) {
    return searchTerm === ''
      ? this.products
      : this.products.filter(
        (product: Product) => product.name.toLowerCase().includes(searchTerm)
      );
  }

  addToCart(product: Product): void {
    this.cart.push(product);
  }

  get cartItems(): Product[] {
    return this.cart;
  }

  getCartTotal(): number {
    return this.cart.reduce((prev, next) => {
      let discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
      return prev + next.price * discount;
    }, 0);
  }

  removeFromCart(product: Product) {
    this.cart = this.cart.filter(p => p.id !== product.id);
  }

}
