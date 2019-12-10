import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'br-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() title: string;
  name: string = null;
  constructor(private authService: AuthService, private router: Router) {
    authService.userData$.subscribe(data => this.name = data ? data.name : null);
  }

  ngOnInit() {
  }

  handleAuthAction(login) {
    if (login) {
      this.authService.login();
    } else {
      this.authService.logout();
      this.router.navigateByUrl('/');
    }
  }


}
