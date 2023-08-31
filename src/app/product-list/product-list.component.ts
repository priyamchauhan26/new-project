import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product.model';
import { ProductService } from '../service/product/product.service';
import { MoreInfoModalComponent } from '../more-info-modal/more-info-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MessageDto } from '../dtos/Message.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit  {
  
  enableedit=false;

  product:Product[]|any;
  messagedto: MessageDto |any;
    
  data:any
  

   constructor(private productservice:ProductService,public dialog: MatDialog){
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
