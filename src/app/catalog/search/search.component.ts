import { Component } from '@angular/core';
import { Product } from '../product.model';
import { productsArray } from '../products-data'
import { ProductsService } from '@catalog/products.service';
import { CartService } from '@core/site-header/cart.service';

@Component({
  selector: 'bot-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchTerm: string = '';
  cart: Product[] = [];

  constructor(private productsService: ProductsService, private cartService: CartService) { }


  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  filter(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
  }

  getFilteredProducts(): Product[] {
    return this.productsService.getFilteredProducts(this.searchTerm);
  }
}
