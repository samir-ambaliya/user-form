import { Component, inject } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { NgNeatDialogComponent } from '../user-packages/ng-neat-dialog/ng-neat-dialog.component';

@Component({
  selector: 'app-user-directive',
  templateUrl: './user-directive.component.html',
  styleUrls: ['./user-directive.component.css']
})
export class UserDirectiveComponent {
  switchCases:string[]=['employee','company']
  private dialog = inject(DialogService);
  private title = 'Dialog title';

  constructor(){}

  openModal(){
    const dialogRef = this.dialog.open(NgNeatDialogComponent,{
      data: {
        title: this.title,
      },
    })
    dialogRef.afterClosed$.subscribe((result) => {
      console.log('Modal closed with result:', result);
    });
  }


}
