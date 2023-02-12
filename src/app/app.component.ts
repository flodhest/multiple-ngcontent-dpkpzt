import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(public dialog: MatDialog) { }

  onClose(event){
    this.dialog.closeAll();
    console.log(event);
  }
}
