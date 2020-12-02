import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageContainerComponent } from './components/message-container/message-container.component';

const routes: Routes = [
  {
      path:'user/:name',component:MessageContainerComponent
  },
  {
    path:'',component:MessageContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
