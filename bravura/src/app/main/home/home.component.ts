import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../shared/notifications/notification.service';
import { NotificationType } from '../../models/notifaction-message.interface';

@Component({
  selector: 'br-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
  }

  generate(type) {
    this.notificationService.pushMessage({
      message: 'Some message',
      type
    });
  }

}
