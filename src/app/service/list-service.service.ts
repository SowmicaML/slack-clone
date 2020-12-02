import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ListServiceService {
  
  constructor(private http: HttpClient) {
      
   }
   getChannelName() {
    return this.http.get('../../assets/api/channels.json');
  }
  getUsers(){
    return this.http.get('../../assets/api/users.json');
  }
  
}
 
   

