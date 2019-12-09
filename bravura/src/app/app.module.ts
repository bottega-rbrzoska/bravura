import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NavigationComponent } from './navigation/navigation.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestChildComponent } from './test-child/test-child.component';
import { TestCounterComponent } from './test-counter/test-counter.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavigationComponent,
    KontaktComponent,
    ProductListComponent,
    ProductDetailsComponent,
    HomeComponent,
    PageNotFoundComponent,
    TestChildComponent,
    TestCounterComponent,
    UserLoginComponent,
    ProductListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
