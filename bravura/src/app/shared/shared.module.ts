import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipe } from './test.pipe';
import { VatPipe } from './vat.pipe';
import { NgbButtonsModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NieWiemControlComponent } from './nie-wiem-control/nie-wiem-control.component';
import { TestDirective } from './test.directive';
import { HighlightDirective } from './highlight.directive';
import { TestStructDirective } from './test-struct.directive';
import { PermissionsDirective } from './permissions.directive';
import { NotificationComponent } from './notifications/notification/notification.component';
import { NotificationRefDirective } from './notifications/notification-ref.directive';
import { NotificationContainerComponent } from './notifications/notification-container/notification-container.component';
import { NotificationService } from './notifications/notification.service';

@NgModule({
  declarations: [
    TestPipe,
    VatPipe,
    NieWiemControlComponent,
    TestDirective,
    HighlightDirective,
    TestStructDirective,
    PermissionsDirective,
    NotificationComponent,
    NotificationRefDirective,
    NotificationContainerComponent],
  imports: [
    CommonModule,
    NgbButtonsModule,
    NgbModalModule,
  ],
  exports: [
    TestPipe,
    VatPipe,
    NieWiemControlComponent,
    NgbButtonsModule,
    NgbModalModule,
    TestDirective,
    HighlightDirective,
    TestStructDirective,
    PermissionsDirective,
    NotificationRefDirective,
    NotificationContainerComponent
  ],
  entryComponents: [NotificationComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [NotificationService]
    };
  }
}
