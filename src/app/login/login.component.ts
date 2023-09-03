import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginform !:FormGroup;
  h!:string;

  public  userlogin={
    email:'',
    password:'',
   }

 
 constructor(private userservice:UserService,private route:Router){

 }
  ngOnInit(){

  }

  onLogin(){
    
    this.userservice.userLogin(this.userlogin).subscribe((data:any) =>
    {
      console.log(data);
      if(data.status==200)
      {
       alert(data.message)
       localStorage.setItem('useremail',this.userlogin.email);
       this.route.navigate(['/home']);
      }
      else if(data.status==400)
      {
        alert(data.message)
        
      }

    });

  
    
  }

  email(arg0: string, email: any) {
    throw new Error('Method not implemented.');
  }
  

}
