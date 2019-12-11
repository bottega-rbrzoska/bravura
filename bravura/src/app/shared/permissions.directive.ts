import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Directive({
  selector: '[brPermissions]'
})
export class PermissionsDirective implements OnInit, OnDestroy {

  @Input() brPermissions;
  constructor(private template: TemplateRef<any>,
              private vcr: ViewContainerRef,
              private authService: AuthService) {

  }

  ngOnInit(): void {
    this.authService.userRoles$.pipe(untilDestroyed(this)).subscribe((roles: string[]) => {

      this.vcr.clear();
      if (roles && roles.includes(this.brPermissions)) {
        this.vcr.createEmbeddedView(this.template);
      }
    });
  }

  ngOnDestroy(): void {
  }

}
