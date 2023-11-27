import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './component/product-view/product-view.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { OrderPageComponent } from './component/order-page/order-page.component';

const routes: Routes = [
  { path: '', component: ProductViewComponent },
  { path: 'product-detail/:productid', loadChildren: () => import('./component/product-detail/product-detail.module').then(m => m.ProductDetailModule)},
  { path: 'cart-page', loadChildren: () => import('./component/cart-page/cart-page.module').then(m => m.CartPageModule) },
  { path: 'order-page', loadChildren: () => import('./component/order-page/order-page.module').then(m => m.OrderPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
