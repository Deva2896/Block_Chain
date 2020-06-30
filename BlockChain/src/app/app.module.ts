import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { RetailerComponent } from './retailer/retailer.component';
import { MiddlewareComponent } from './middleware/middleware.component';
import { ShopkeererComponent } from './shopkeerer/shopkeerer.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';


import {MatTabsModule} from '@angular/material/tabs'; 


@NgModule({
  declarations: [
    AppComponent,
    RetailerComponent,
    MiddlewareComponent,
    ShopkeererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
