import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

import { ToastrService } from 'ngx-toastr';



// import { ToastrService } from '../toastr.service';


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: any[];
  constructor(private eventService: EventService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }


  handleThumbnailClicked(eventName) {
    this.toastr.success(eventName)
  }
}
