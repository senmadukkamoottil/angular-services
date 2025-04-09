import { Component } from '@angular/core';
import { Product } from './product.model';
import { ProductsService } from './products.service';
import { CartService } from '@core/site-header/cart.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products$: Observable<Product[]> = this.productsService.getProducts();
  private cart: Product[] = [];

  constructor(private productsService: ProductsService, private cartService: CartService) {
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
  }
}
