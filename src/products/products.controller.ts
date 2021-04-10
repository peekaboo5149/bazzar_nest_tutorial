import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  addProduct(
    @Body() completeBody: { title: string; desc: string; price: number },
  ) {
    const generatedId = this.productService.insertProduct(
      completeBody.title,
      completeBody.desc,
      completeBody.price,
    );
    return { id: generatedId };
  }

  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productService.getSingleProduct(prodId);
  }
}
