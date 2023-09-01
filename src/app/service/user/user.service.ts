import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}
  userLogin(data:any)
  {
     return this.http.post('http://localhost:8082/user/userlogin',data)
  }

  getuserByemail(email:any){
    const params=new HttpParams().set("email",email);
    return this.http.get<User>("http://localhost:8082/user/getuser",{params})


  }
}

