import { Component, OnInit, Input } from '@angular/core';
import { ListServiceService } from 'src/app/service/list-service.service';
import {current_user} from  "../../../constants/messageConstants";
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  constructor(private listservice : ListServiceService) { }
  channels;
  users;
  currentUser =current_user;
  @Input() showChannelList: boolean;
  @Input() showUserList: boolean;
  @Input() showAppList : boolean;
  @Input()  showChannelListToggle : boolean;
  @Input()  showUserListToggle : boolean;
  @Input()  showAppListToggle : boolean;
  ngOnInit(): void {
    this.listservice.getChannelName().subscribe(res=>{
      this.channels = res;
    })
    this.listservice.getUsers().subscribe(res=>{
      this.users = res;
    })
  }
}