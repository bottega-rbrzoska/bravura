import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import { KontaktComponent } from './main/kontakt/kontakt.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'products', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
   // preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
