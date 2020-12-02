import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  sub: Subject<boolean>
  constructor() {
    this.sub = new Subject<boolean>();
   }

   toggleComponent(data:boolean){
     this.sub.next(data);
   }
   
   toggleProfileCard(data:boolean){
    this.sub.next(data);
   }
}
