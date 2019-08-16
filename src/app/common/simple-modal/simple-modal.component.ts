import { Component, OnInit, Input, Inject, ViewChild, ElementRef } from '@angular/core';
import { JQ_TOKEN } from '../jQuery.service';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {
  @Input() title: string;
  @Input() elementId: string;
  @ViewChild('modalcontainer', {static: false}) containerEl: ElementRef;
  @Input() closeOnBodyClick: string;

  closeModal(){
    if(this.closeOnBodyClick.toLocaleLowerCase() === 'true'){
      this.$(this.containerEl.nativeElement).modal('hide');
    }
  }
  constructor(@Inject(JQ_TOKEN) private $: any) { }

  ngOnInit() {
  }

}
