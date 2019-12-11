import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestChildComponent } from '../test/test-child/test-child.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { TwitterListComponent } from './twitter/twitter-list/twitter-list.component';
import { TwitterContainerComponent } from './twitter/twitter-container/twitter-container.component';
import { TwitterImageItemComponent } from './twitter/twitter-image-item/twitter-image-item.component';
import { TwitterHejtItemComponent } from './twitter/twitter-hejt-item/twitter-hejt-item.component';

@NgModule({
  declarations: [
    NavigationComponent,
    KontaktComponent,
    HomeComponent,
    PageNotFoundComponent,
    UserLoginComponent,
    TwitterListComponent,
    TwitterContainerComponent,
    TwitterImageItemComponent,
    TwitterHejtItemComponent],
  imports: [
    RouterModule,
    SharedModule,
    CommonModule
  ],
  exports: [NavigationComponent]
})
export class MainModule { }
