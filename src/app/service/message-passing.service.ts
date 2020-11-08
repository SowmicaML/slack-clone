import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Message{
  sender:string;
  receiver:string;
  messages:[];
  constructor(sender,receiver,messages){
    this.sender=sender;
    this.receiver=receiver;
    this.messages=messages
  }

}
export class MessagePassingService {

  constructor() { }
  mesages=[
    new Message('vishal','manoj',['hi dude','how are you']),
    new Message('manoj','vishal',['fine dude','how are you']),
    new Message('vishal','manoj',['saptya']),
  ]
  getMessages(){
    return this.mesages;
  }

}

