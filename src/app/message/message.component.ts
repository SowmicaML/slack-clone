<<<<<<< HEAD
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

=======
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

>>>>>>> 913a9f3b48a15cc27604ccd1b11e3802c7a8e4c3
