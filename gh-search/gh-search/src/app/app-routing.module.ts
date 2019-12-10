import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {GitFormComponent} from './git-form/git-form.component'

const routes: Routes = [
  
    {path:"gitUser",component:GitFormComponent},
    {path:"gitUser",component:GitFormComponent}
  ]
;

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
