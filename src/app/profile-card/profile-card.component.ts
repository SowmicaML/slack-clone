import { Component, OnInit } from '@angular/core';
import {AppService} from 'src/app/app.service';
@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  constructor(private appservice : AppService) { 
    this.appservice.sub.subscribe(x=>{
      console.log("from profile card",x);
    })
  }

  ngOnInit(): void {
  }

}
