import { Component, OnInit } from '@angular/core';
import {AppService} from 'src/app/app.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showProfile:boolean;
  constructor(private appservice :AppService) {
    this.appservice.sub1.subscribe(x=>{
      console.log("from navbar", x);
    })
   }

  ngOnInit(): void {
  }
  
  emit(showProfile : boolean){
    this.showProfile = !showProfile;
    console.log("in sidenav-componet.ts.."+this.showProfile);
    this.appservice.toggleProfileCard(this.showProfile);
  }
}
