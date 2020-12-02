import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import {messages ,current_user} from '../constants/messageConstants'

@Injectable({
  providedIn: 'root'
})
export class Message{
  sender:string;
  receiver:string;
  messages:[];
  date:Date=new Date();
  constructor(sender,receiver,messages){
    this.sender=sender;
    this.receiver=receiver;
    this.messages=messages
  }

}
export class MessagePassingService {

  constructor() { }
  mesages=[]
  getMessages( receiver){
    this.mesages=[
      new Message(receiver,current_user,[messages[0],messages[1]]),
      new Message(current_user,receiver,[messages[2]+" "+receiver,messages[3]]),
      new Message(receiver,current_user,[messages[4],messages[5]]),
      new Message(current_user,receiver,[messages[6]]),
      new Message(receiver,current_user,[messages[7]]),
      new Message(current_user,receiver,[messages[8]]),
    ]
    return this.mesages;
  }

}

