import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
    @Input() event1[]: any;
    @Output() eventClick = new EventEmitter();

    //evente1 = 'test';
  


    handleClickMe() {
        this.eventClick.emit(this.event.price);
    }

    log(){
      console.log('foo');
    }

  constructor() { }

  ngOnInit() {
  }

}
