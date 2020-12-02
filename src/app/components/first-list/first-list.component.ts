import { Component, OnInit } from '@angular/core';
import{firstlist} from "./firstlist";

@Component({
  selector: 'app-first-list',
  templateUrl: './first-list.component.html',
  styleUrls: ['./first-list.component.scss']
})
export class FirstListComponent implements OnInit {
  firstlist=firstlist;
  constructor() { }

  ngOnInit(): void {
  }
  
  

}
