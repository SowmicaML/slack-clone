import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }
  public icon = ""; 

public changeIcon(newIcon: string ){
    this.icon = newIcon ; 
}

}
