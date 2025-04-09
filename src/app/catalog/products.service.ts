import { Injectable } from '@angular/core';
import { Product } from "@shared/product.model";
import { productsArray } from './products-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  products: Product[] = [];
  searchTerm: string = '';

  constructor(private httpClient: HttpClient) {
    this.products = productsArray;
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('/api/products');
  }

  getFilteredProducts(searchTerm: string) {
    return searchTerm === ''
      ? this.products
      : this.products.filter(
        (product: Product) => product.name.toLowerCase().includes(searchTerm)
      );
  }
}
