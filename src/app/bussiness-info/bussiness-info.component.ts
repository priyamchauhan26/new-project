import { Component } from '@angular/core';
import { MerchantserviceService } from '../merchantservice.service';

@Component({
  selector: 'app-bussiness-info',
  templateUrl: './bussiness-info.component.html',
  styleUrls: ['./bussiness-info.component.css']
})
export class BussinessInfoComponent {
 email:any;

  constructor(private merchanservice :MerchantserviceService)
  {
  }
    public  merchant={
      merchantName:'',
      shopName:'',
      shopregId:'',
      gstNumber:'',
      createDate:'',
      shopyear:'',
      ownerShop:'',
      accountNumber:'',
      accountBranch:'',
      address:'',
      address2:'',
      bankName:'',
      panNo:'',
      email:'',
      phone1:'',
      phone2:'',
      city:'',
      status:'',
      

      state:'',
      pincode:'',
      cardType:'',
      mergeOwner:''



     }

     
    formSubmit()
    {
      console.log(this.merchant);
      
      this.email=localStorage.getItem('useremail');
      this.merchant.email=this.email;

    this.merchanservice.addMerchantDetails(this.merchant).subscribe((data:any) =>
    {
      console.log(data);
     if(data.status==200)
     {
      alert("success");

     }
});
    }
  }