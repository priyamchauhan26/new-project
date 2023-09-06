import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product.model';
import { ProductService } from '../service/product/product.service';
import { MoreInfoModalComponent } from '../more-info-modal/more-info-modal.component';

import { MessageDto } from '../dtos/Message.model';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Route, Router } from '@angular/router';
import { SearchProduct } from '../dtos/searchproduct.model';


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
   search :SearchProduct[]=[];
   searchdata: SearchProduct | any = new SearchProduct('', '');
  data:any
  field:String| any;
  fieldvalue:String|any;
  todate:any;
  isdateSelected:boolean=false;
  finalsearchvalue:any;

  


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

  

  onFieldSelected(event:Event){
    const selectedValue = (event.target as HTMLSelectElement)?.value;
    this.field = selectedValue
   console.log("Selected Value",selectedValue);
    if(selectedValue=="date"){
      this.field="date";
      this.isdateSelected=true;
    }
    else{
      this.isdateSelected=false;
    }
  }
  OnSubmit(){
   
    
    
    if(this.field=="date"){
    this.finalsearchvalue=this.fieldvalue+"-"+this.todate;
  
    this.searchdata.searchkey=this.field;
    this.searchdata.searchvalue=this.finalsearchvalue;

    this.search.push(this.searchdata);

    
    console.log(this.search);
    }
    else{
      
      
      this.searchdata.searchkey=this.field;
    this.searchdata.searchvalue=this.fieldvalue;

      this.search.push(this.searchdata);
      console.log(this.searchdata);
      console.log(this.search);
    }

    const productsearchdata=this.productservice.searchproduct(this.search).subscribe((data:any)=>{
      this.messagedto=data;
      this.product=this.messagedto.data;
      if(this.messagedto.status!==200){
        alert("No Product")
      }
      
    })


    

    
  }

  










 
}
