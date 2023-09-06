import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageDto } from 'src/app/dtos/Message.model';
import { SearchProduct } from 'src/app/dtos/searchproduct.model';
import { Product } from 'src/app/model/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
product:Product[]|any;
messagedto:MessageDto|any;
  

  constructor(private http:HttpClient) { }

  addproduct(addproductform:any,product:Product){
    product=addproductform.value;
    return this.http.post<any>("http://localhost:8082/add_product",product)

    
  }

  public  getProducts(){
    return this.http.get<any>("http://localhost:8082/getproductlist")
  }
 public searchproduct(search:any){
  return this.http.post<any>("http://localhost:8082/searchproduct",search);
 }


}
//   public  getProducts():Observable<any>{
//     this.http.get<any>("http://localhost:8082/getproductlist").subscribe(data=>{
//       this.messagedto=data;
//       if(this.messagedto.status==200){
//         console.log(this.messagedto);
//          this.product=this.messagedto.data;
//          }
//       else{
//         alert("No Product to Show")
//       }
      
//     })
    
//     return this.product;
//   }
// }
