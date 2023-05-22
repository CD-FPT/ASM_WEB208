import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
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
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
