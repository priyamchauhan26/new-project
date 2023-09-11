import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  imageClicked: EventEmitter<any> = new EventEmitter<any>();
  appcomponentClicked: EventEmitter<any> = new EventEmitter<any>();
  enableimage:boolean=false;
  constructor(){};

  isimageClicked(){
    this.enableimage=!this.enableimage
    this.imageClicked.emit(this.enableimage);
  }
  appcomponentclicked(){
    this.appcomponentClicked.emit();

  }


  
}
