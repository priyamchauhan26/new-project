import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { EditData } from 'src/app/dtos/edit.model';

@Injectable({
  providedIn: 'root'
})
export class EditproductService {
  iseditEnable:Subject<EditData>=new Subject<EditData>();

  constructor() { }

  editproduct(editdata: EditData){
    this.iseditEnable.next(editdata)
  }
}
