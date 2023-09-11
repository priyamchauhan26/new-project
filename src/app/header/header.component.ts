import { Component } from '@angular/core';

import { SharedService } from '../service/sharedservice/sharedservices.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 AllowSearch :false|undefined;
 isDivVisible: boolean | undefined;

 navbar:boolean=false;

 currentUser:any;
 constructor(private sharedservices:SharedService)
 {
  this.currentUser=localStorage.getItem("useremail");
  if(this.currentUser!=null)
  {
    this.isDivVisible=true;
    this.isDivVisible = this.isDivVisible
   
  }
  else if(this.currentUser!=null)
  {
    this.isDivVisible=false;
  
    this.isDivVisible = !this.isDivVisible; // Toggle visibility
  }

}
toggleDropdown(){
this.sharedservices.isimageClicked();
}

navbarcollapse(){
  this.navbar=!this.navbar;
}


 
}
