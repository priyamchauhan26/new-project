import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }


  
  
  passwordChangeForm: FormGroup|any;

  constructor() { }

  ngOnInit(): void {
    this.passwordChangeForm = new FormGroup({
      oldPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', Validators.required),
    });
  }

 

  onSubmit() {
    if (this.passwordChangeForm.valid) {
      const oldPassword = this.passwordChangeForm.value.oldPassword;
      const newPassword = this.passwordChangeForm.value.newPassword;
      // You can now send the oldPassword and newPassword to your server for validation and password update.
      // Add your logic here.
      console.log('Form submitted:', oldPassword, newPassword);
    }
  }
}

