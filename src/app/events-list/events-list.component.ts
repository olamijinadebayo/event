import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

import { ToastrService } from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router';



// import { ToastrService } from '../toastr.service';


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: any[];
  constructor(private eventService: EventService, private toastr: ToastrService,private route:ActivatedRoute) {
  }

  ngOnInit() {
     this.events = this.route.snapshot.data.events;
  }


  handleThumbnailClicked(eventName) {
    this.toastr.success(eventName)
  }
}
