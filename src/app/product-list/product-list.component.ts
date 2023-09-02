import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product.model';
import { ProductService } from '../service/product/product.service';
import { MoreInfoModalComponent } from '../more-info-modal/more-info-modal.component';

import { MessageDto } from '../dtos/Message.model';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  
})
export class ProductListComponent implements OnInit  {
  
  enableedit=false;
  displayStyle = "none";
  pid:any
  product:Product[]|any;
  messagedto: MessageDto |any;

  public productinfo={
    productname:'',
    price:'',
    totalquantity:'',
    sellquantity:'',
    brandname:'',
    size:'',
    address:'',
    serialnummber:''



  }


    
  data:any
  

   constructor(private productservice:ProductService,public router:Router){

    

    this.productservice.getProducts().subscribe(data=>{
      this.messagedto=data;
      this.product=this.messagedto.data;
      console.log("product",this.product);
      if(this.product==null){
        alert("No data Present")
      }
      
    });
   }
  ngOnInit(){
     
   
    
  }

 

  OnSelect(i:number){
    //this.items= this.items.filter((item,i)=> i!= index);
    this.data=this.product[i];
    console.log(i);
    console.log(this.data)
   
   this.pid=this.data.id
   this.productinfo.productname = this.data.productname;
   this.productinfo.brandname = this.data.brandname;
   this.productinfo.totalquantity = this.data.totalquantity;
   this.productinfo.address = this.data.address;
   this.productinfo.sellquantity = this.data.sellquantity;
   this.productinfo.price = this.data.price;
   this.productinfo.serialnummber = this.data.serialnummber;
   this.productinfo.size = this.data.size;



   this.displayStyle = "block";

  }
  
  closePopup() {
    this.displayStyle = "none";
  }

  EditPopup(){

    console.log(this.pid)
    this.router.navigate(['addproduct'],this.pid);


  }









  // product = [
  //   { name: 'Object 1', description: 'Description 1', details: 'Details 1', showContainer: false },
  //   { name: 'Object 2', description: 'Description 2', details: 'Details 2', showContainer: false },
  //   // ... more objects
  // ];

  // toggleContainer(item: any) {
  //   item.showContainer = !item.showContainer;
  // }
  // openModal(object: any): void {
  //   const dialogRef = this.dialog.open(MoreInfoModalComponent, {
  //     width: '300px',
  //     data: this.product,
     
  //   });
  // }
 
}
