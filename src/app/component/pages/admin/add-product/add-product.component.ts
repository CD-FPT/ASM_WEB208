import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/component/service/service.service';
import { IProduct } from 'src/app/component/interface/product';
import { CategoryService } from 'src/app/component/service/category.service';
import { Icate } from 'src/app/component/interface/category';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  category: Icate[] = []
  ngOnInit() {
    this.categoryService.getAllCate().subscribe(data => {
      this.category = data.datas
      console.log(data.datas);
    })
  }
  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceService,
    private router: Router,
    private categoryService: CategoryService
  ) { }

  // productForm = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   img: new FormControl(''),
  //   description: new FormControl('')
  // })
  productForm = this.formBuilder.group({
    name: [''],
    price: 0,
    description: [''],
    image: [''],
    categoryId: ['']
  })

  AddProduct() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      const product: IProduct = {
        name: this.productForm.value.name || '',
        price: this.productForm.value.price || 0,
        description: this.productForm.value.description || '',
        image: this.productForm.value.image || '',
        categoryId: this.productForm.value.categoryId || ''
      }
      this.service.addProduct(product).subscribe(data => {
        console.log(data);
        this.router.navigate(['/admin/products']);
      })

    }

  }
}
