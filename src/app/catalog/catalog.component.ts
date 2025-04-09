import { Component } from '@angular/core';
import { Product } from './product.model';
import { ProductsService } from './products.service';
import { CartService } from '@core/site-header/cart.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products: Product[] = [];
  private cart: Product[] = [];

  constructor(private productsService: ProductsService, private cartService: CartService) {
    this.productsService.getProducts().subscribe(response => this.products = response);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
  }
}
