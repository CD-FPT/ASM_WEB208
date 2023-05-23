import { Component } from '@angular/core';
import { IProduct } from 'src/app/component/interface/product';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/component/service/service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  product!: IProduct;
  productForm = this.formBuilder.group({
    name: [''],
    price: 0,
    description: '',
    img: ''
  })

  constructor(private productService: ServiceService,
    private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router
  ) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log(id);
      this.productService.getProduct(id).subscribe(product => {
        this.product = product
        this.productForm.patchValue({
          name: product.name,
          price: product.price,
          description: product.description,
          img: product.img
        })
      })
    })
    console.log(this.productForm.value);

  }
  onHandleEdit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        id: this.product.id,
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0,
        description: this.productForm.value.description || "",
        img: this.productForm.value.img || "",
      }

      this.productService.updateProduct(product).subscribe(data => {
        console.log(data);
        this.router.navigate(['admin/products'])
      }, error => console.log(error.message)
      )
    }
  }
}
