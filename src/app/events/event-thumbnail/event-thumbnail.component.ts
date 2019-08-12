import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {IEvent} from '../shared/index';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
    @Input() event: IEvent;
    @Output() eventClick = new EventEmitter();

   getStartTimeClass(){
     const isEarlyStart = this.event && this.event.time === '8:00 am'
     return {green: isEarlyStart, bold: isEarlyStart}
   }
  constructor() { }

  ngOnInit() {
  }

}
