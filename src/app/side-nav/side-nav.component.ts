import { Component, OnInit } from '@angular/core';
import {AppService} from 'src/app/app.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  showChannelList : boolean;
  showUserList : boolean;
  showAppList : boolean;
  showChannelListToggle : boolean=true;
  showUserListToggle : boolean=true;
  showAppListToggle :boolean=true;
  showCard : boolean;

  constructor(private appservice : AppService) {
    this.appservice.sub.subscribe(x=>{
     console.log("frm sidenav...",x);
    })
   }

  ngOnInit(): void {
  }
emit(showCard : boolean){
  this.showCard = !showCard;
  console.log("in sidenav-componet.ts.."+this.showCard);
  this.appservice.toggleComponent(this.showCard);
}

}
