import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { MessageDto } from '../dtos/Message.model';
import { User } from '../model/user.model';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  private dataSubject = new BehaviorSubject<any>(null);
data$ = this.dataSubject.asObservable();
 
  user: User|any
  updateduser:any

 
 currentUserEmail:String|any;
  updateprofileform:FormGroup|any;
  
  messagedto:MessageDto|any

  constructor(private userservice:UserService,private route:Router){
     
  }
  
  ngOnInit(){
    this.onreload()
    
    this.updateprofileform=new FormGroup({
    
      firstName:new FormControl(null,Validators.required),
      lastName:new FormControl(null,Validators.required),
      username:new FormControl({ value:null,disabled: true},Validators.required),
      email:new FormControl({ value:null,disabled: true},Validators.required),
      password:new FormControl({ value:null,disabled: true},Validators.required),
      createDate:new FormControl({ value:null,disabled: true},Validators.required),
      status:new FormControl({ value:null,disabled: true},Validators.required),
      address:new FormControl(null,Validators.required),
      mobileNo:new FormControl({ value:null,disabled: true},Validators.required),

    })
  
    



    

    console.log(localStorage.getItem('useremail'));
    console.log(this.updateprofileform);


  }
  //  onSubmit(){
  //   this.data$.subscribe((data:any)=>{
  //    console.log( "On Submit call",data.data.userId);

  //    this.updateduser.userId=data.data.userId;
  //    console.log( "On Submit call",this.updateduser.userId);
  //    this.updateduser=this.updateprofileform.value;
  //   this.userservice.updateprofile(this.updateduser).subscribe((data:any)=>{

  //     this.messagedto=data;
  //     if (this.messagedto.status==200) {
  //    alert(this.messagedto.message);
  //     }
  //     else{
  //       alert(this.messagedto.message);
  //     }
  //   })
  //   console.log(this.updateduser);
  //   });
    
    
  // }
  onSubmit() {
    // Assuming this.data$ emits data with the expected structure
    this.data$.subscribe((data: any) => {
      if (data && data.data && data.data.userId) {
        // Initialize this.updateduser if it's not already initialized
        if (!this.updateduser) {
          this.updateduser = {};
        }
  
        // Assign the userId from data to this.updateduser.userId
        this.updateduser.userId = data.data.userId;
  
        // Assign form values to this.updateduser
        this.updateduser = {
          ...this.updateduser, // Preserve userId if it already exists
          ...this.updateprofileform.value,
        };
  
        // Assuming this.userservice.updateprofile(this.updateduser) returns an Observable
        this.userservice.updateprofile(this.updateduser).subscribe((response: any) => {
          this.messagedto = response;
          if (this.messagedto.status == 200) {
            alert(this.messagedto.message);
          } else {
            alert(this.messagedto.message);
          }
        });
  
        console.log(this.updateduser);
      } else {
        console.error("Data is missing or does not have the expected structure.");
      }
    });
  }
  
  


  async onreload(){
    this.currentUserEmail=localStorage.getItem('useremail');
     
     this.userservice.getuserByemail(this.currentUserEmail).subscribe((data:any)=>{
      console.log("data", data);
      this.messagedto=data;
     this.user=this.messagedto.data;
      
      this.updateprofileform.patchValue(this.user);
      this.dataSubject.next(data);
      


      
    } 
    )
    
  }
 
 
}
