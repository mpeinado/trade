import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { StockQuote } from '../stockQuote';
import { StockOrderInputs } from '../stockOrderInputs';

import { StockPurchaseService } from '../stock-purchase.service';

@Component({
  selector: 'app-place-stock-order',
  templateUrl: './place-stock-order.component.html',
  styleUrls: ['./place-stock-order.component.css']
})
export class PlaceStockOrderComponent implements OnChanges, OnInit {
  // used to display the company info/quote on the view
  @Input() stockQuote: StockQuote;

  @Output() placeOrder = new EventEmitter();

  orderQuantity:number = 1;

  constructor(
    private stockPurchaseService:StockPurchaseService
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.stockQuote = changes.stockQuote.currentValue;
  }

  firePlaceOrder(ticker:string, orderQuantity:number, lastPrice:number) {
    let orderInputs = new StockOrderInputs(ticker, orderQuantity, lastPrice); 

    this.placeOrder.emit(orderInputs);
 }
}
