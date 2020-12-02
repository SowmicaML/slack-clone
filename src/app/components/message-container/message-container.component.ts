import { AfterViewInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Message, MessagePassingService } from '../../service/message-passing.service';
import {current_user} from "../../constants/messageConstants"

@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.scss']
})
export class MessageContainerComponent implements OnInit {
messages=[]
receiver='';
sender=current_user;
  constructor(private messagePassingService : MessagePassingService,private route : ActivatedRoute) { 
    this.receiver='Manoj';
    this.route.params.subscribe((params: Params) => {
      if(params['name'])
      this.receiver=params['name'];
      this.messages=this.messagePassingService.getMessages(this.receiver);
  });
  }

  ngOnInit(): void {
    
  }
  sendMessageToParent(message){
    if(message==='')
    return;
    this.messages.push(new Message(this.sender,this.receiver,[message]));
    

  }

}
