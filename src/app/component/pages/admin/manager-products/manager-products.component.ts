import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/component/interface/product';
import { ServiceService } from 'src/app/component/service/service.service'
@Component({
  selector: 'app-manager-products',
  templateUrl: './manager-products.component.html',
  styleUrls: ['./manager-products.component.css']
})

export class ManagerProductsComponent implements OnInit {

  status: boolean = false;
  productName = "";
  products: IProduct[] = []
  product!: IProduct;

  ngOnInit() {
    this.productService.getProducts().subscribe(data=>{
      this.products = data.datas
    })
  }

  constructor(private productService: ServiceService, private http: HttpClient) {
    // this.productService.getProducts().subscribe(data => {
    //   this.products = data?.datas
    //   console.log(this.products);
    // })
  }

  getValue(e: any) {
    this.productName = e.target.value;
  }
  changeStatus() {
    this.status = !this.status;
  }
  removeItem(id: any) {
    const product = this.products.find(item => item._id == id)
    const result = confirm(`Bạn có muốn xóa sản phẩm ${product?.name} không ?`)
    if (result) {

      this.productService.deleteProduct(id).subscribe(() => {
        this.products = this.products.filter(item => item._id !== id)
      }, (error) => {
        console.log(error.message)
      })
    }
  }

}
