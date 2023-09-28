import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDirectiveComponent } from './user-directive/user-directive.component';
import { NgNeatDialogComponent } from './user-packages/ng-neat-dialog/ng-neat-dialog.component';

const routes: Routes = [
  { path: 'form', component:UserFormComponent  },
  {
     path: '',   redirectTo: '/form', pathMatch: 'full' 
  },
  {
    path: 'directive',  component:UserDirectiveComponent 
 },
 {
  path: 'ngneat',  component:NgNeatDialogComponent 
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
