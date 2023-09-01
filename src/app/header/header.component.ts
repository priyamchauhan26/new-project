import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 AllowSearch :false|undefined;
 isDivVisible: boolean | undefined;

 currentUser:any;
 constructor()
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

 
}
