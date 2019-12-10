import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotificationMessage, NotificationType } from '../../../models/notifaction-message.interface';

@Component({
  selector: 'br-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
 @Output() close = new EventEmitter();
  message: NotificationMessage;

  constructor() { }

  ngOnInit() {
  }

}
