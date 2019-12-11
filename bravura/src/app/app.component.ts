import { Component, ViewEncapsulation } from '@angular/core';
import { TestType } from './models/test-type.interface';
import { NotificationService } from './shared/notifications/notification.service';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bravura';

  constructor(private ns: NotificationService) {

  }

  notify() {
    this.ns.notify({
      message: 'text',
      type: 'error'
    });
  }
}
