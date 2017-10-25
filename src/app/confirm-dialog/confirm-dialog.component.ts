import { Component, OnInit, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  @Input() message: string;

  constructor(public dialogRef: MdDialogRef<ConfirmDialogComponent>) { }

  ngOnInit() {
  }

  confirm = () => this.dialogRef.close(true);

  cancel = () => this.dialogRef.close(false);

}
