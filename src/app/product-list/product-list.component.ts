import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product.model';
import { ProductService } from '../service/product/product.service';
import { MoreInfoModalComponent } from '../more-info-modal/more-info-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent  {
  
  enableedit=false;
  product:Product[] = [
    {
      id: 1,
      productname: 'Product 1',
      price: '100',
      totalquantity: '50',
      sellquantity: '10',
      serialnumber: 'SN123',
      brandname: 'Brand A',
      address: '123 Main St',
      code: 'ABC123',
      subcategory: 'Category A',
      pcid: 101,
      desciption: 'This is product 1',
      filename: 'product1.jpg',
      image: 'https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwZmxvd2VyfGVufDB8fDB8fHww&w=1000&q=80',
      date: new Date(),
      size: 'Medium'
    },
    {
      id: 2,
      productname: 'Product 2',
      price: '200',
      totalquantity: '80',
      sellquantity: '20',
      serialnumber: 'SN456',
      brandname: 'Brand B',
      address: '456 Elm St',
      code: 'XYZ456',
      subcategory: 'Category B',
      pcid: 102,
      desciption: 'This is product 2',
      filename: 'https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwZmxvd2VyfGVufDB8fDB8fHww&w=1000&q=80',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTaeJp7_7Styy4qG54XznDX58OwYEMTDbmQ&usqp=CAU',
      date: new Date(),
      size: 'Large'
    },
    {
      id: 3,
      productname: 'Product 3',
      price: '150',
      totalquantity: '60',
      sellquantity: '15',
      serialnumber: 'SN789',
      brandname: 'Brand C',
      address: '789 Oak St',
      code: 'PQR789',
      subcategory: 'Category A',
      pcid: 103,
      desciption: 'This is product 3',
      filename: 'product3.jpg',
      image: 'https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwZmxvd2VyfGVufDB8fDB8fHww&w=1000&q=80',
      date: new Date(),
      size: 'Small'
    },
    {
      id: 4,
      productname: 'Product 4',
      price: '250',
      totalquantity: '70',
      sellquantity: '25',
      serialnumber: 'SN101',
      brandname: 'Brand D',
      address: '101 Pine St',
      code: 'MNO101',
      subcategory: 'Category B',
      pcid: 104,
      desciption: 'This is product 4',
      filename: 'product4.jpg',
      image: 'https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwZmxvd2VyfGVufDB8fDB8fHww&w=1000&q=80',
      date: new Date(),
      size: 'Medium'
    },
    {
      id: 5,
      productname: 'Product 5',
      price: '180',
      totalquantity: '55',
      sellquantity: '12',
      serialnumber: 'SN222',
      brandname: 'Brand E',
      address: '222 Maple St',
      code: 'DEF222',
      subcategory: 'Category A',
      pcid: 105,
      desciption: 'This is product 5',
      filename: 'product5.jpg',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTaeJp7_7Styy4qG54XznDX58OwYEMTDbmQ&usqp=CAU',
      date: new Date(),
      size: 'Large'
    },
    {
      id: 6,
      productname: 'Product 6',
      price: '300',
      totalquantity: '90',
      sellquantity: '30',
      serialnumber: 'SN333',
      brandname: 'Brand F',
      address: '333 Birch St',
      code: 'GHI333',
      subcategory: 'Category B',
      pcid: 106,
      desciption: 'This is product 6',
      filename: 'product6.jpg',
      image: 'https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwZmxvd2VyfGVufDB8fDB8fHww&w=1000&q=80',
      date: new Date(),
      size: 'Extra Large'
    },
  ];

  data:any
  

   constructor(private productservice:ProductService,public dialog: MatDialog){}
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
