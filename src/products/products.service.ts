import { Injectable, NotFoundException } from '@nestjs/common';
import Product from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  private findProduct(id: string): Product {
    const product = this.products.find((prod) => prod.id === id);
    if (!product)
      throw new NotFoundException('Could Not find product with this ID');
    return product;
  }

  insertProduct(title: string, desc: string, price: number): string {
    const prodId = Math.random().toString();
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }

  getAllProducts() {
    return [...this.products];
  }

  getSingleProduct(prodId: string) {
    const product = this.findProduct(prodId);
    return { ...product };
  }
}
