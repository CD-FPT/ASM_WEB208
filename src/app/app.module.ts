import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './component/layouts/admin-layout/admin-layout.component';
import { WebLayoutComponent } from './component/layouts/web-layout/web-layout.component';
import { HomePageComponent } from './component/pages/home-page/home-page.component';
import { ProductsPageComponent } from './component/pages/products-page/products-page.component';
import { DetailPageComponent } from './component/pages/detail-page/detail-page.component';
import { DashboardComponent } from './component/pages/admin/dashboard/dashboard.component';
import { ManagerProductsComponent } from './component/pages/admin/manager-products/manager-products.component';
import { AddProductComponent } from './component/pages/admin/add-product/add-product.component';
import { UpdateProductComponent } from './component/pages/admin/update-product/update-product.component';
import { ProductItemComponent } from './component/pages/admin/product-item/product-item.component';
// import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SignupComponent } from './component/auth/signup/signup.component';
import { SigninComponent } from './component/auth/signin/signin.component';
// import { CategoryComponent } from './component/pages/admin/category/category.component';
import { AddCategoryComponent } from './component/pages/admin/add-category/add-category.component';

import { CategoryComponent } from './component/pages/admin/category/category.component';
import { CategoryItemComponent } from './component/pages/admin/category-item/category-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    WebLayoutComponent,
    HomePageComponent,
    ProductsPageComponent,
    DetailPageComponent,
    DashboardComponent,
    ManagerProductsComponent,
    AddProductComponent,
    UpdateProductComponent,
    ProductItemComponent,
   
    SignupComponent,
    SigninComponent,
    AddCategoryComponent,
    CategoryComponent,
    CategoryItemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // CarouselModule.forRoot()
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
