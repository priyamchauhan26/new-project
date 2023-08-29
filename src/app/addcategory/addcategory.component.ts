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
    public  categogory={
      categoryName:'',
      description:''
     }

     ngOnInit(): void {
      this.addcategoryform=new FormGroup({
        categoryName :new FormControl(null,Validators.required),
        description  :new FormControl(null,Validators.required)

      })
      
    }

    formSubmit()
    {
      console.log(this.categogory);
      {
      
      }

    this.merchanservice.addcat(this.categogory).subscribe((data:any) =>
    {
      console.log(data);
     if(data.status==200)
     {
      alert("success");

     }

      this.merchant=data;
    });
  }

}
