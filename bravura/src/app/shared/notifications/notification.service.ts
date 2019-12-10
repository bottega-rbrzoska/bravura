import { ComponentFactory, ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { NotificationComponent } from './notification/notification.component';
import { NotificationMessage, NotificationType } from '../../models/notifaction-message.interface';

@Injectable()
export class NotificationService {

  private messageSubj$ = new Subject<NotificationMessage>();
  private vcRef: ViewContainerRef;
  private componentFactory: ComponentFactory<NotificationComponent>;

  constructor(private cfr: ComponentFactoryResolver) {
    this.messageSubj$.subscribe(msg => this.renderMessage(msg));
    this.componentFactory = cfr.resolveComponentFactory(NotificationComponent);
  }

  initViewContainer(vc) {
    this.vcRef = vc;
  }

  pushMessage(msg: NotificationMessage) {
    this.messageSubj$.next(msg);
  }

  private renderMessage(msg: NotificationMessage) {
    const component = this.vcRef.createComponent(this.componentFactory);
    component.instance.message = msg;
    const subscription = component.instance.close.subscribe(() => component ? component.destroy() : null);
    setTimeout(() => {
      if (component) {
        component.destroy();
        subscription.unsubscribe();
      }
    }, 5000);
  }
}
