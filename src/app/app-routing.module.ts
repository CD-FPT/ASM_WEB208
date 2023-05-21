import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebLayoutComponent } from './component/layouts/web-layout/web-layout.component';
import { HomePageComponent } from './component/pages/home-page/home-page.component';
import { ProductsPageComponent } from './component/pages/products-page/products-page.component';
import { DetailPageComponent } from './component/pages/detail-page/detail-page.component';
import { DashboardComponent } from './component/pages/admin/dashboard/dashboard.component';
import { ManagerProductsComponent } from './component/pages/admin/manager-products/manager-products.component';
import { UpdateProductComponent } from './component/pages/admin/update-product/update-product.component';
import { AddProductComponent } from './component/pages/admin/add-product/add-product.component';
import { AdminLayoutComponent } from './component/layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '', component: WebLayoutComponent, children: [
      { path: '', component: HomePageComponent, pathMatch: 'full' },
      { path: 'products', component: ProductsPageComponent },
      { path: 'products/:id', component: DetailPageComponent },
    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ManagerProductsComponent },
      { path: 'add', component: AddProductComponent },
      { path: 'products/:id/update', component: UpdateProductComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
