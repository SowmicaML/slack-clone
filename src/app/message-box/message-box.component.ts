
import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../service/message-passing.service';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {

  @Input() message : Message;
  constructor() { }

  ngOnInit(): void {
    console.log(this.message.messages);
  }

}
