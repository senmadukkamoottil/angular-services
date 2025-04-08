import { Component, Input } from '@angular/core';
import { ProductsService } from '@catalog/products.service';
import { Product } from '@shared/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  @Input() product!: Product;

  constructor(private productsService: ProductsService) {

  }

  getImageUrl(product: Product) {
    if (!product) return '';
    return '/assets/images/' + product.imageName;
  }

}
