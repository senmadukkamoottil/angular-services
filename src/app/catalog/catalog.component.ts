import { Component } from '@angular/core';
import { Product } from './product.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products: Product[] = [];
  private cart: Product[] = [];

  constructor(private productsService: ProductsService) {
    this.products = this.productsService.getProducts();
  }

  addToCart(product: Product) {
    this.cart.push(product);
  }
}
