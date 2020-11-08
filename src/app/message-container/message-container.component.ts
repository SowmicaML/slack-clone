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
