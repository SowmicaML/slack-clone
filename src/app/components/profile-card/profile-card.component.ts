import { Component, OnInit } from '@angular/core';
import {AppService} from 'src/app/app.service';
import {current_user} from "../../constants/messageConstants";
@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  currentUser = current_user;
  showProfile:boolean;
  constructor(private appservice : AppService) { 
    this.appservice.sub1.subscribe(x=>{
      this.showProfile = x;
      console.log("from profile card",this.showProfile);
    })
  }

  ngOnInit(): void {
  }

}
