import { Component } from '@angular/core';
import { IProduct } from '../../interface/product';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
 status:boolean = false;
 productName = '';
 products:IProduct[]=[];
 product!:IProduct;

 constructor (private productService:ServiceService){
  this.productService.getProducts().subscribe(data=>{
    this.products = data
  })
 }
 getValue(e: any) {
  this.productName = e.target.value;
}
}
