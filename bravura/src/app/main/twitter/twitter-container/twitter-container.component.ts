import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';
import { TwitterImageItemComponent } from '../twitter-image-item/twitter-image-item.component';
import { TwitterBaseItem } from '../twitter-base-item';

@Component({
  selector: 'br-twitter-container',
  templateUrl: './twitter-container.component.html',
  styleUrls: ['./twitter-container.component.scss']
})
export class TwitterContainerComponent implements OnInit, AfterContentInit {

  @ContentChild(TwitterBaseItem, { static: true }) item: TwitterBaseItem;
  constructor() { }

  ngOnInit() {
  }

  like() {
    this.item.like();
  }

  ngAfterContentInit(): void {
    console.log(this.item);
  }
}
