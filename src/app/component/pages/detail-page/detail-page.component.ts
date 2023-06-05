import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../interface/product';
import { ServiceService } from '../../service/service.service';


@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent {
  product!: IProduct;
  productForm = this.formBuilder.group({
    name: [''],
    price: 0
  })
  constructor(
    private productService: ServiceService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      this.productService.getProduct(id).subscribe(product => {
        // Sản phẩm dựa theo ID
        this.product = product.datas;

        // this.productForm.patchValue({
        //   name: product.name,
        //   price: product.price
      })
    })

  }

}
