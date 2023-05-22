import { Component } from '@angular/core';
import { IProduct } from 'src/app/component/interface/product';
import {ServiceService } from 'src/app/component/service/service.service'
@Component({
  selector: 'app-manager-products',
  templateUrl: './manager-products.component.html',
  styleUrls: ['./manager-products.component.css']
})
export class ManagerProductsComponent {
 status : boolean = false;
 productName = "";
 products: IProduct[] = []
 product! : IProduct;

    constructor(private productService: ServiceService) {
      this.productService.getProducts().subscribe(data => {
        this.products = data
      })
}
    getValue(e: any) {
      this.productName = e.target.value;
    }
    changeStatus() {
      this.status = !this.status;
    }
    removeItem(id: any) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.products = this.products.filter(item => item.id !== id)
      }, (error) => {
        console.log(error.message)
      })
  
    }
    
}
