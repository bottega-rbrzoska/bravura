import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'br-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  @Output() authAction = new EventEmitter<boolean>();
  @Input() userName = null;
  constructor() { }

  ngOnInit() {
  }

  handleLogin() {
    this.authAction.emit(!this.userName);
  }

}
