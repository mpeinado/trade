import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockPurchaseComponent } from './stock-purchase/stock-purchase.component';
import { StockQuoteLookupComponent } from './stock-quote-lookup/stock-quote-lookup.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { PlaceStockOrderComponent } from './place-stock-order/place-stock-order.component';
import { OrderStatusComponent } from './order-status/order-status.component';


@NgModule({
  declarations: [
    AppComponent,
    StockPurchaseComponent,
    StockQuoteLookupComponent,
    CompanyInfoComponent,
    PlaceStockOrderComponent,
    OrderStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
