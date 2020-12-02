import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  sub: Subject<boolean>
  sub1 : Subject<boolean>
  constructor() {
    this.sub = new Subject<boolean>();
    this.sub1 = new Subject<boolean>();
   }

   toggleComponent(data:boolean){
     this.sub.next(data);
   }
   
   toggleProfileCard(datas:boolean){
    this.sub1.next(datas);
   }
}
