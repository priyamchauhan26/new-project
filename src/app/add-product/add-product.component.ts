import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../model/Product.model';
import { ProductService } from '../service/product/product.service';
import { MessageDto } from '../dtos/Message.model';
import { Router } from '@angular/router';
import { MerchantserviceService } from '../merchantservice.service';
import { EditproductService } from '../service/editproductservice/editproduct.service';
import { EditData } from '../dtos/edit.model';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  public productcatlist:any
  selectcatname:any
  public productsubcatlist:any
  selectsubcatname:any

  editproduct:EditData=new EditData();
  editdata:Product|any;

  subcategory: String | any;
  category: String | any;
  addproductform: FormGroup | any;
  productImg!: string;
  flag: boolean | any = true;
  apiDto:MessageDto|any;
  product: Product | any;

  image: string | ArrayBuffer | null = null;

    constructor(private productservice :ProductService, private router:Router,private merchanservice :MerchantserviceService,private editproductService:EditproductService){

      
    this.merchanservice.getcategory().subscribe((data)=>
    {
      console.warn("data",data);
      this.productcatlist=data;
    }
    );
    }

    
 changecatname(e:any)
 {
  console.warn(e.target.value);
  this.selectcatname=e.target.value

  console.log(this.selectcatname);

  this.merchanservice.getProductSubcat(this.selectcatname).subscribe((data)=>
  {
    console.log(data);
    this.productsubcatlist=data;
  });



 }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.image = e.target!.result;
   //  this.image="C:\\Users\\Lenovo\\";
        console.log(this.image);
      };
      reader.readAsDataURL(file);
      this.flag = false;
    } else {
      this.image = null;
    }
  }
  clearImage() {
    this.image = null;
    this.flag = true;
  }
  ngOnInit() {
    this.addproductform = new FormGroup({
      description: new FormControl(null, Validators.required),
      productname: new FormControl(null, Validators.required),
      brandname: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      totalquantity: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      size: new FormControl(null, Validators.required),
      subcategory: new FormControl(null, Validators.required),
      image:new FormControl(null, Validators.required)
    });

    this.editproductService.iseditEnable.subscribe((data:any)=>{
      console.log("Edit data calling",data);
      this.editproduct=data;
      console.log("Edit product recieived",this.editproduct)
      console.log("Edit flag",this.editproduct.getFlag())
      if(this.editproduct.getFlag()===1){

        console.log("data here is for edit");
        this.addproductform.patchValue(this.editproduct.getData());



      }
      else{
        console.log('not editing');
      }
    })
  }

  onSelectsubCategory(event: any) {
    this.subcategory = event.target.value;
    console.log(this.subcategory);
  }
  
  ProductAdded() {
    console.log(this.image);
   console.log(this.addproductform)
   this.productservice.addproduct(this.addproductform,this.product).subscribe((data:any) =>
   {

   });


  //  this.product.image=this.image;
  //   if(this.image !==null){
  //   this.apiDto=this.productservice.addproduct(this.addproductform,this.product).subscribe(data=>{
  //    this.apiDto=data;
  //    if(this.apiDto.status=="200"){
  //     alert("Product Added Successfully");
  //    }
  //    else{
  //     alert(this.apiDto.message);
  //    }
  //   })
    
  //   }
  //   else{
  //     alert("Choose the image")
  //   }
   
  }
}
