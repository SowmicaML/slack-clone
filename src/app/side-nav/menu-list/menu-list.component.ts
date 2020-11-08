import { Component, OnInit, Input } from '@angular/core';
import { ListServiceService } from 'src/app/list-service.service';
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  constructor(private listservice : ListServiceService) { }
  channels;
  users;
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