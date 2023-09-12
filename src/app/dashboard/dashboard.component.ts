import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user/user.service';
import { User } from '../model/user.model';
import { MessageDto } from '../dtos/Message.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private userDataSubject = new BehaviorSubject<any>(null);
  userData$ = this.userDataSubject.asObservable();


 currentUserEmail:String|any;
  updateprofileform:FormGroup|any;
  user:User|any;
  messagedto:MessageDto|any

  constructor(private userservice:UserService,private route:Router){
    
  }
  
  ngOnInit(){
   

    }
  
    navigatetoProfile(){
      this.route.navigate(['dashboard/profile']);
    }
    navigatetoBussiness(){
      this.route.navigate(['dashboard/business']);
    }


  

}
