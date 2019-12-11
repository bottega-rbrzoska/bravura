import { Component, forwardRef, OnInit } from '@angular/core';
import { TwitterBaseItem } from '../twitter-base-item';

@Component({
  selector: 'br-twitter-image-item',
  templateUrl: './twitter-image-item.component.html',
  styleUrls: ['./twitter-image-item.component.scss'],
  providers: [{ provide: TwitterBaseItem, useExisting: forwardRef(() => TwitterImageItemComponent )}]
})
export class TwitterImageItemComponent implements OnInit, TwitterBaseItem {

  constructor() { }

  ngOnInit() {
  }

  like() {
    alert('i like images')
  }

}
