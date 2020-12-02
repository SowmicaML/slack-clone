import { Component,EventEmitter,OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  
  @Output() sendMessage: EventEmitter<String> = new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }
    message="";
  textdisplay(){
      this.sendMessage.emit(this.message);
      this.message="";
  }
 
  }

