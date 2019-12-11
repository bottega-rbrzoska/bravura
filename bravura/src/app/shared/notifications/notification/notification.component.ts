import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'br-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  @Output() close = new EventEmitter();
  message: { message: string, type: string };

  constructor() { }

  ngOnInit() {
  }

}
