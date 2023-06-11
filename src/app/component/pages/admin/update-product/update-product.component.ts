import { CategoryService } from './../../../service/category.service';
import { Component } from '@angular/core';
import { IProduct } from 'src/app/component/interface/product';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/component/service/service.service';
import { Icate } from 'src/app/component/interface/category';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  product!: IProduct;
  category: Icate[] = [];
  productForm = this.formBuilder.group({
    name: [''],
    price: 0,
    description: '',
    image: '',
    categoryId: ''
  })

  constructor(
    private productService: ServiceService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private categoryService: CategoryService
  ) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log(id);
      this.productService.getProduct(id).subscribe(data => {
        this.product = data.datas
        console.log(this.product);
        this.categoryService.getAllCate().subscribe(data => {
          this.category = data.datas
          this.productForm.patchValue({
            name: this.product.name,
            price: this.product.price,
            description: this.product.description,
            image: this.product.image,
            categoryId: this.product.categoryId,
          })
        })

      })
    })
    // console.log(this.productForm.value); 

  }
  onHandleEdit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        _id: this.product._id,
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0,
        description: this.productForm.value.description || "",
        image: this.productForm.value.image || "",
        categoryId: this.productForm.value.categoryId || "",
      }
      console.log(product);
      
      this.productService.updateProduct(product).subscribe(data => {
        // console.log(data);
        this.router.navigate(['admin/products'])
      }, error => console.log(error.message)
      )
    }
  }
}
