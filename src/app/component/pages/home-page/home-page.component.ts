import { Component } from '@angular/core';
import { IProduct } from '../../interface/product';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  status:boolean = false;
  productName = '';
  products:IProduct[]=[];
  product!:IProduct;
 
  constructor (private productService:ServiceService){
   this.productService.getProducts().subscribe(data=>{
     this.products = data.datas
   })
  }

  
}
