import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetailerComponent } from './retailer/retailer.component';
import { MiddlewareComponent } from './middleware/middleware.component';
import { ShopkeererComponent } from './shopkeerer/shopkeerer.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'retailer', component: RetailerComponent },
  { path: 'Middleware', component: MiddlewareComponent },
  { path: 'Shopkeeper', component: ShopkeererComponent },
  { path: 'home', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
