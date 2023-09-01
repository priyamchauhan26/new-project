import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  

  constructor(private http:HttpClient) { }

  addproduct(addproductform:any,product:Product){
    product=addproductform.value;
    return this.http.post<any>("http://localhost:8082/add_product",product)

    
  }
}
