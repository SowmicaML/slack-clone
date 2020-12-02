<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { MessagePassingService } from '../service/message-passing.service';
@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.scss']
})
export class MessageContainerComponent implements OnInit {
messages=[]
receiver='Manoj';

  constructor(private messagePassingService : MessagePassingService) {

    
   }

  ngOnInit(): void {
    this.messages=this.messagePassingService.getMessages();
  }

}
=======
import { Component, OnInit } from '@angular/core';
import { Message, MessagePassingService } from '../service/message-passing.service';

@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.scss']
})
export class MessageContainerComponent implements OnInit {
messages=[]
receiver='Manoj';
sender='vishal';
  constructor(private messagePassingService : MessagePassingService) { }

  ngOnInit(): void {
    this.messages=this.messagePassingService.getMessages();
  }
  sendMessageToParent(message){
    if(message==='')
    return;
    this.messages.push(new Message(this.sender,this.receiver,[message]));
    

  }

}
>>>>>>> 913a9f3b48a15cc27604ccd1b11e3802c7a8e4c3
