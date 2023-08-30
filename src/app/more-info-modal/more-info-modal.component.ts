import { Component, OnInit,Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-more-info-modal',
  templateUrl: './more-info-modal.component.html',
  styleUrls: ['./more-info-modal.component.css']
})
export class MoreInfoModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<MoreInfoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public product: any
  ) {}

  closeModal(): void {
    this.dialogRef.close();
  }

  ngOnInit() {

  }
}
