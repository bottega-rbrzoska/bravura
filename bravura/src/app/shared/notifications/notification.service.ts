import { ComponentFactory, ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { NotificationComponent } from './notification/notification.component';

@Injectable()
export class NotificationService {

  private compFactory: ComponentFactory<NotificationComponent>;
  private vcr: ViewContainerRef;
  constructor( private cfr: ComponentFactoryResolver ) {
    this.compFactory = cfr.resolveComponentFactory(NotificationComponent)
  }

  initialize(vcr: ViewContainerRef) {
    this.vcr = vcr;
  }

  private renderNotification(msg) {
    const component = this.vcr.createComponent(this.compFactory);
    component.instance.message = msg;
    const subscr = component.instance.close.subscribe(() => component.destroy());

    setTimeout(() => {
      component.destroy();
      if (subscr) {
        subscr.unsubscribe();
      }
    }, 5000);

  }

  notify(msg: {message: string, type: 'error' | 'success'}) {
    this.renderNotification(msg);
  }
}
