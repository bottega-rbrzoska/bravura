import { Directive, ViewContainerRef } from '@angular/core';
import { NotificationService } from './notification.service';

@Directive({
  selector: '[brNotificationRef]'
})
export class NotificationRefDirective {

  constructor(private vcr: ViewContainerRef, private notificationService: NotificationService) {
    this.notificationService.initialize(vcr);
  }

}
