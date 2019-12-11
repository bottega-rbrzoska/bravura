import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipe } from './test.pipe';
import { VatPipe } from './vat.pipe';
import { NgbButtonsModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NieWiemControlComponent } from './nie-wiem-control/nie-wiem-control.component';
import { NotificationComponent } from './notifications/notification/notification.component';
import { NotificationService } from './notifications/notification.service';
import { NotificationContainerDirective } from './notifications/notification-container.directive';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    TestPipe,
    VatPipe,
    NieWiemControlComponent,
    NotificationComponent,
    NotificationContainerDirective,
    LoaderComponent],
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
    NotificationContainerDirective,
    LoaderComponent
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
