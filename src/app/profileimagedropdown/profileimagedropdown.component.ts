import { Component } from '@angular/core';
import { SharedService } from '../service/sharedservice/sharedservices.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-profileimagedropdown',
  templateUrl: './profileimagedropdown.component.html',
  styleUrls: ['./profileimagedropdown.component.css']
})
export class ProfileimagedropdownComponent {
  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();
  isDropdownOpen:boolean=false;
  enableimage:boolean|any;

  
  constructor(private sharedservices:SharedService){
    this.sharedservices.imageClicked.subscribe((data:boolean)=>
    {
      
     
      
      
     
       this.isDropdownOpen=!this.isDropdownOpen;
      //  if(this.isDropdownOpen && this.enableimage){
        
      //   this.sharedservices.appcomponentClicked.subscribe(()=>{
      //     this.enableimage=false;
      //     this.isDropdownOpen=!this.isDropdownOpen;
      //   })
      //  }
      //  this.dataSubject.next(this.isDropdownOpen);
       
    })


   }
   changedropdownvalue(){
    this.isDropdownOpen=!this.isDropdownOpen;
   }

  

}
