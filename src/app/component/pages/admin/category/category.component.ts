import { Component } from '@angular/core';
import { Icate } from 'src/app/component/interface/category';
import { CategoryService } from 'src/app/component/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
categories:Icate[]=[];
category!:Icate

constructor (private categoryService:CategoryService){
  this.categoryService.getAllCate().subscribe(data=>{
    this.categories= data.datas
  })
}
removeItem(id: any) {
  const category = this.categories.find(item => item._id == id)
  const result = confirm(`Bạn có muốn xóa danh mục ${category?.name} không ?`)
  if (result) {

    this.categoryService.deleteCategory(id).subscribe(() => {
      this.categories = this.categories.filter(item => item._id !== id)
    }, (error) => {
      console.log(error.message)
    })
  }
}
}
