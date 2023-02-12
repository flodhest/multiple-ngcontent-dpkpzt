import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Inject, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit, AfterViewInit {
  dialogRef;
  @ViewChild('button') button: ViewChild;
  @ViewChild('dialogContent') layoutTemplate: TemplateRef<any>;
  constructor(public dialog: MatDialog) {

  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(this.layoutTemplate);

    this.dialogRef.afterClosed().subscribe(result => {
      // fix bug: button ripple effect appears again after a dialog is closed
      // reference: https://github.com/angular/material2/issues/8420
      let btn = document.querySelector('.btn-toggle');
      if (btn !== null) {
        btn.classList.remove('cdk-program-focused');
        btn.classList.add('cdk-mouse-focused');
      }
    });
  }

  closeDialog() {
    console.log('hee');
    this.dialogRef.close();
  }

  ngOnInit() { }

  ngAfterViewInit() { }

}

