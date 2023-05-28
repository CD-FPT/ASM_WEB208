import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/component/service/service.service';
import { IProduct } from 'src/app/component/interface/product';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceService,
    private router: Router
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
    img: ['']
  })

  AddProduct() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      const product: IProduct = {
        name: this.productForm.value.name || '',
        price: this.productForm.value.price || 0,
        description: this.productForm.value.description || '',
        img: this.productForm.value.img || '',
      }
      this.service.addProduct(product).subscribe(data => {
        console.log(data);
        this.router.navigate(['/admin/products']);
      })

    }

  }
}
