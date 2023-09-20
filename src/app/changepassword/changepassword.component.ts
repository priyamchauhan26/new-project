import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ChangePasswordDto } from '../dtos/changepassword.model';
import { UserService } from '../service/user/user.service';
import { MessageDto } from '../dtos/Message.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  isDropdownOpen = false;
  messageDto:MessageDto|any;
  changepasword:ChangePasswordDto=new ChangePasswordDto();
  currentuseremail:string|any;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  passwordForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private userService:UserService,private router:Router) {
    this.passwordForm = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
    const newPasswordControl = this.passwordForm.get('newPassword');
    if (newPasswordControl) {
      newPasswordControl.valueChanges.subscribe(() => {
        const confirmPasswordControl = this.passwordForm.get('confirmPassword');
        if (confirmPasswordControl) {
          confirmPasswordControl.updateValueAndValidity();
        }
      });
    }
  }
  ngOnInit(){

  }

  onSubmit() {
    if (this.passwordForm.valid) {
      this.currentuseremail=localStorage.getItem('useremail');
      this.changepasword.setOldpassword(this.passwordForm.get('oldPassword')?.value);
      this.changepasword.setNewpassword(this.passwordForm.get('newPassword')?.value);
      console.log(this.changepasword);

      console.log("Current user email",this.currentuseremail);

      this.userService.changepassword(this.currentuseremail,this.changepasword).subscribe((data:any)=>{
        this.messageDto=data;
        if(this.messageDto.status===200){
          alert(this.messageDto.message);
          localStorage.clear();
          this.router.navigate(["/login"]);


        }
        else{
          alert(this.messageDto.message);
        }


      })


      
      this.passwordForm.reset();
    }
  }
}
