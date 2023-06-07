import { Component } from '@angular/core';
import { Icate } from 'src/app/component/interface/category';
import { CategoryService } from 'src/app/component/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
categorys:Icate[]=[];
category!:Icate

constructor (private categoryService:CategoryService){
  this.categoryService.getAllCate().subscribe(data=>{
    this.categorys= data.datas
  })
}
removeItem(id: any) {
  const category = this.categorys.find(item => item._id == id)
  const result = confirm(`Bạn có muốn xóa sản phẩm ${category?.name} không ?`)
  if (result) {

    this.categoryService.deleteCategory(id).subscribe(() => {
      this.categorys = this.categorys.filter(item => item._id !== id)
    }, (error) => {
      console.log(error.message)
    })
  }
}
}
