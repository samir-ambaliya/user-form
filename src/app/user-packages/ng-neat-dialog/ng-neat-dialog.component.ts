import { Component, OnInit, inject } from '@angular/core';
import { DialogRef, DialogService } from '@ngneat/dialog';

@Component({
  selector: 'app-ng-neat-dialog',
  templateUrl: './ng-neat-dialog.component.html',
  styleUrls: ['./ng-neat-dialog.component.css']
})
export class NgNeatDialogComponent implements OnInit {
  private dialog = inject(DialogService);
  public data: any
  constructor( public dialogRef: DialogRef ){}

  ngOnInit(): void {
  }

  onClose(){
    this.dialog.closeAll()
  }

}
