import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangePasswordDto } from 'src/app/dtos/changepassword.model';
import { User } from 'src/app/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}
  userLogin(data:any)
  {
     return this.http.post('http://localhost:8082/user/login',data)
  }

  getuserByemail(email:any){
    const params=new HttpParams().set("email",email);
    return this.http.post("http://localhost:8082/user/getuser",params)


  }
  updateprofile(user:any){
    return  this.http.post("http://localhost:8082/user/updateprofiledetails",user )
  }
  changepassword(currentuseremail:string,ChangePasswordDto:ChangePasswordDto|any){
    const params=new HttpParams().set("email",currentuseremail);
    return this.http.post("http://localhost:8082/user/changepassword",ChangePasswordDto,{params});

  }
}

