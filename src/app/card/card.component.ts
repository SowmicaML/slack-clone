import { Component, OnInit } from '@angular/core';
import {AppService} from 'src/app/app.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  showCard : boolean;

  constructor(private appservice : AppService) {
    this.appservice.sub.subscribe(x=>{
      this.showCard = x;
     console.log("frm card:....",this.showCard);
    })
  }
































  ngOnInit(): void {
    
  }

}
