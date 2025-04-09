import { computed, Injectable, signal } from "@angular/core";
import { Product } from "@shared/product.model";

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cart = signal<Product[]>([]);

  addToCart(product: Product): void {
    this.cart.update((oldValue) => [...oldValue, product])
  }

  get cartItems(): Product[] {
    return this.cart();
  }

  get cartTotal() {
    return computed(() => {
      return this.cart().reduce((prev, next) => {
        let discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
        console.log('Cart total', prev + next.price * discount);
        return prev + next.price * discount;
      }, 0);
    });
  }

  removeFromCart(product: Product) {
    this.cart.update((oldValue) => oldValue.filter(item => item.id !== product.id));
  }
}
