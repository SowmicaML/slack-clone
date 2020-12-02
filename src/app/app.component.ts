import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'slack-clone';
  constructor(private appservice : AppService) {

   }
  focus(){
    console.log("in ts file..");
    this.appservice.toggleComponent(false);
  }
}

