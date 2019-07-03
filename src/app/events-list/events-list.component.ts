import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am.',
        price: 599,
        imageUrl: '/assets/images/ang.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country:'England'
        }
    }
    handleEventClicked(data:string) {
        alert(data);
    }
  constructor() { }

  ngOnInit() {
  }

}
