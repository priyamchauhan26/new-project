import { Component } from '@angular/core';
import { MerchantserviceService } from '../merchantservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent {
  merchant:any
  addcategoryform !:FormGroup;


  constructor(private merchanservice :MerchantserviceService)
  {
  }
    public  Category={
      category:'',
      description:''
     }

     ngOnInit(): void {
    
      
    }

    formSubmit()
    {
      console.log(this.Category);
      {
      
      }

    this.merchanservice.addcat(this.Category).subscribe((data:any) =>
    {
      console.log(data);
     if(data.status==200)
     {
      alert("success");

     }
     else{
      alert("input field are mendatory");
     }

     location.reload();

      this.merchant=data;
    });
  }

}
