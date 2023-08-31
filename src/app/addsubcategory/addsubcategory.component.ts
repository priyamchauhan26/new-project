import { Component } from '@angular/core';
import { MerchantserviceService } from '../merchantservice.service';
import { Router } from '@angular/router';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-addsubcategory',
  templateUrl: './addsubcategory.component.html',
  styleUrls: ['./addsubcategory.component.css']
})
export class AddsubcategoryComponent {
  public productcatlist:any
  selectcatname:any

  public subcatlist:any
  public  subcategory={
    pcid:'',
    subcategory:'',
    desciption:''
   }


  categogory:any
  http: any;

  constructor(private merchanservice :MerchantserviceService,private router:Router)

  {

    this.merchanservice.getcategory().subscribe((data)=>
    {
      console.warn("data",data);
      this.productcatlist=data;
    }
    );
  }

  ngOnInit(): void {
       
  }

  
 changecatname(e:any)
 {
  console.warn(e.target.value);
  this.selectcatname=e.target.value

  console.log(this.selectcatname);
 }

 formSubmit(){

  this.subcategory.pcid  =this.selectcatname
  this.merchanservice.addsubcat(this.subcategory).subscribe((data:any) =>
    {
      console.log(data);
     if(data.status==200)
     {
      alert("save data")
     }
     else if(data.status==400)
     {
      alert("input are missing")
     }
     location.reload();

 });
}

}
