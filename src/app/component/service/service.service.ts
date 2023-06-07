import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interface/product';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http: HttpClient) { }
  getProducts() {
    return this.http.get<any>('http://localhost:8088/api/products');
  }
  getProduct(id: any): Observable<any> {
    return this.http.get<any>('http://localhost:8088/api/products/' + id);
  }
  deleteProduct(id: number | string): Observable<IProduct> {
    return this.http.delete<IProduct>('http://localhost:8088/api/products/' + id);
  }
  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.patch<IProduct>(`http://localhost:8088/api/products/${product._id}`, product);
  }

  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`http://localhost:8088/api/products`, product);
  }

}
