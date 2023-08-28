import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginform !:FormGroup;
  h!:string;

 
 constructor(private fb:FormBuilder,private http:HttpClient){}
  ngOnInit(){
    this.loginform=this.fb.group({
      email : new FormControl(null,(Validators.required,Validators.email)),
      password : new FormControl(null,Validators.required)
    })
  }

  onLogin(){
    
    this.http.post<any>("http://localhost:8080/login",this.loginform.value).subscribe(h=>{
      console.log(h);
    })
   
    this.loginform.reset();
  }
  

}
