import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MessageDto } from '../dtos/Message.model';
import { User } from '../model/user.model';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  private userDataSubject = new BehaviorSubject<any>(null);
  userData$ = this.userDataSubject.asObservable();


 currentUserEmail:String|any;
  updateprofileform:FormGroup|any;
  user:User|any;
  messagedto:MessageDto|any

  constructor(private userservice:UserService,private route:Router){
    this.onreload();
  }
  
  ngOnInit(){
    this.updateprofileform=new FormGroup({
      // firstName:new FormControl(this.user.firstName,Validators.required),
      // lastName:new FormControl(this.user.lastName,Validators.required),
      // username:new FormControl(this.user.username,Validators.required),
      // email:new FormControl(this.user.email,Validators.required),
      // password:new FormControl(this.user.password,Validators.required),
      // createDate:new FormControl(this.user.createDate,Validators.required),
      // status:new FormControl(this.user.status,Validators.required),
      // address:new FormControl(this.user.address,Validators.required),
      // mobileNo:new FormControl(this.user.mobileNo,Validators.required),
      firstName:new FormControl(null,Validators.required),
      lastName:new FormControl(null,Validators.required),
      username:new FormControl(null,Validators.required),
      email:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required),
      createDate:new FormControl(null,Validators.required),
      status:new FormControl(null,Validators.required),
      address:new FormControl(null,Validators.required),
      mobileNo:new FormControl(null,Validators.required),

    })
  
   console.log("user Data",this.user);
    



    

    console.log(localStorage.getItem('useremail'));
    console.log(this.updateprofileform);


  }
  onSubmit(){

  }


  onreload(){
    this.currentUserEmail=localStorage.getItem('useremail');
    this.userservice.getuserByemail(this.currentUserEmail).subscribe((data: any)=>{
      console.log("data", data);
      this.messagedto=data;
      this.user=this.messagedto;
    

      this.userDataSubject.next(this.user);
      
    })
  }
}
