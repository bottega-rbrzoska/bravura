import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  name: string = null;
  constructor() { }

  ngOnInit() {
  }

  handleAuthAction(login) {
    this.name = login ? 'Alojzy Ciurlok' : null;
  }


}
