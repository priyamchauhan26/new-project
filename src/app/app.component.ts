import { Component } from '@angular/core';
import { SharedService } from './service/sharedservice/sharedservices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'I dont know';

clickon:boolean=false;
  constructor(private sharedService:SharedService){


    

  }

  ondashboardclick(){
    this.sharedService.appcomponentclicked();
  }
}
