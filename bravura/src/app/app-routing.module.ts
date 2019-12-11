import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import { KontaktComponent } from './main/kontakt/kontakt.component';
import { AuthService } from './core/auth.service';
import { ProductListComponent } from './product/product-list/product-list.component';
import { TwitterListComponent } from './main/twitter/twitter-list/twitter-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'twitter', component: TwitterListComponent },
  { path: 'products', loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
  canActivate: [AuthService]},
  { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
   // preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
