import { Component, OnInit, ViewContainerRef, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'my-dialog-content',
  templateUrl: './my-dialog-content.component.html',
  styleUrls: ['./my-dialog-content.component.css']
})
export class MyDialogContentComponent implements OnInit {

  @Output() close = new EventEmitter<any>()

  constructor(private viewContainer: ViewContainerRef,
  public dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.viewContainer);
  }

  onClose(){
    //this.dialog.closeAll();
    this.close.emit('from content component');
  }

}