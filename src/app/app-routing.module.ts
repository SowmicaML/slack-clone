import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageContainerComponent } from './message-container/message-container.component';

const routes: Routes = [
  {
    path:'client/:id',component:MessageContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
