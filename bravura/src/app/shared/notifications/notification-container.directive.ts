import { Directive, ElementRef, Inject, OnInit, ViewContainerRef } from '@angular/core';
import { NotificationService } from './notification.service';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[brNotificationContainer]'
})
export class NotificationContainerDirective implements OnInit {

  constructor(private viewContainerRef: ViewContainerRef,
              private el: ElementRef,
              @Inject(DOCUMENT) private document: Document,
              private notificationService: NotificationService) { }

  ngOnInit() {
    const range = this.document.createRange();
    const container = this.document.createElement('div');
    container.setAttribute('style', 'position: fixed; bottom: 10px; right: 10px; z-index: 1000; display: block; width: 330px');
    range.selectNode(this.el.nativeElement)
    range.surroundContents(container);
    this.notificationService.initViewContainer(this.viewContainerRef);
  }
}
