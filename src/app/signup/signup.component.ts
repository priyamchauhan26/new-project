import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { MessageDto } from '../dtos/Message.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  user:User| undefined;
  response!:MessageDto;
  
   singupForm !:FormGroup;
  
   constructor(private fb:FormBuilder,private router:Router,private http:HttpClient ){
    
   }
  ngOnInit(){
    this.singupForm=new FormGroup({
      username: new FormControl(null,Validators.required),
      email: new FormControl(null,Validators.required),
      mobileNo: new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required),
      confirmpassword: new FormControl(null,Validators.required)

    })
    

  }
  signup(){
    this.user=this.singupForm.value;
    this.http.post<User>("http://localhost:8082/user/addusers",this.user).subscribe(response=>{
      
     console.log(response);
     
      alert('Registration Successful');
      this.router.navigate(['/login']);


    
     
    }),(_err: any)=>{
      alert("Somthing whent Wronh")
    };
    

    
    console.log(this.singupForm);
    console.log(this.singupForm.valid)
    
    
    this.singupForm.reset();
   
    
  }

}
