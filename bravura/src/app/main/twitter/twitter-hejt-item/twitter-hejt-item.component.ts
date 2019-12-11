import { Component, forwardRef, OnInit } from '@angular/core';
import { TwitterBaseItem } from '../twitter-base-item';

@Component({
  selector: 'br-twitter-hejt-item',
  templateUrl: './twitter-hejt-item.component.html',
  styleUrls: ['./twitter-hejt-item.component.scss'],
  providers: [{ provide: TwitterBaseItem, useExisting: forwardRef(() => TwitterHejtItemComponent )}]
})
export class TwitterHejtItemComponent implements OnInit, TwitterBaseItem {

  constructor() { }

  ngOnInit() {
  }

  like() {
    alert('i like hejt k..wa!');
  }
}
