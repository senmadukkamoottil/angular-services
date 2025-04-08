import { Injectable } from '@angular/core';
import { Product } from "@shared/product.model";
import { productsArray } from './products-data';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  products: Product[] = [];
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
}
