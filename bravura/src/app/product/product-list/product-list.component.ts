import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductStore } from '../product.store';
import { Product } from '../../models/product';
import { NotificationService } from '../../shared/notifications/notification.service';
import { filter } from 'rxjs/operators';
import { NotificationType } from '../../models/notifaction-message.interface';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'br-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products$: Observable<Product[]>;
  pending$: Observable<boolean>
  constructor(private productStore: ProductStore, notificationService: NotificationService) {
    this.products$ = this.productStore.products$;
    this.pending$ = this.productStore.pending$;
    this.productStore.error$.pipe(untilDestroyed(this), filter(err => !!err)).subscribe(() => notificationService.pushMessage({
      message: 'Error during processing products',
      type: NotificationType.Error
    }));

    if (!this.productStore.state.products.length) {
      this.productStore.refreshUsers();
    }
  }

  ngOnInit() {
  }

  handleSearch(searchData) {
    console.log('search');
    this.productStore.refreshUsers(searchData);
  }

  ngOnDestroy(): void {
  }
}
