import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
    message="";
    messageArray =[];
  textdisplay(){
      this.messageArray.push(this.message);
      this.message="";
  }
 
  }

