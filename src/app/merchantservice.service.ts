import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MerchantserviceService {

  constructor(private http:HttpClient) {}
    addcat(data:any)
    {
       return this.http.post('http://localhost:8082/add_prod_cat',data)
    }

    
   
}
