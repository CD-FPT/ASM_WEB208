import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icate } from '../interface/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCate():Observable<any>{
    return this.http.get<any>('http://localhost:8088/api/categories')
  }
  getOnCate(id: any): Observable<any> {
    return this.http.get<any>('http://localhost:8088/api/categories/' + id);
  }
  
  addCategory(category: any) {
    return this.http.post('http://localhost:8088/api/categories', category);
  }
  deleteCategory(id: number | string): Observable<Icate> {
    return this.http.delete<Icate>('http://localhost:8088/api/categories/' + id);
  }
  updateCategory(category: Icate): Observable<Icate> {
    return this.http.patch<Icate>(`http://localhost:8088/api/categories/${category._id}`, category);
  }
 
  
}
