import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'br-notification-container',
  templateUrl: './notification-container.component.html',
  styleUrls: ['./notification-container.component.scss']
})
export class NotificationContainerComponent implements AfterViewInit {
  @ViewChild('container', { static: true, read: ViewContainerRef}) vcr: ViewContainerRef;
  constructor(private notificationService: NotificationService) {
  }

  ngAfterViewInit(): void {
    this.notificationService.initialize(this.vcr);
  }

}
