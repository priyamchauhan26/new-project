import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MerchantserviceService {

  constructor(private http:HttpClient) {}
    addcat(data:any)
    {
       return this.http.post('http://localhost:8082/add_prod_cat',data)
    }

    addsubcat(data:any)
    {
       return this.http.post('http://localhost:8082/add_prod_subcat',data)
    }

    getProductSubcat(pcid: string): Observable<any> {
      const apiUrl = 'http://localhost:8082/getproductsubcat';
  
      return this.http.get(apiUrl, { params: { pcid: pcid } });
    }
 

    getcategory()
    {
     return this.http.get('http://localhost:8082/getproductcat')
    }
}
