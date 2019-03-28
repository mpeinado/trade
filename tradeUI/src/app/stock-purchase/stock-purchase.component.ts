import { Component, OnInit } from '@angular/core';
import { StockPurchaseService } from '../stock-purchase.service';
import { StockTicker } from '../stockTicker';
import { StockOrder } from '../stockOrder';
import { StockQuote } from '../stockQuote';
import { StockOrderInputs } from '../stockOrderInputs';


@Component({
  selector: 'app-stock-purchase',
  templateUrl: './stock-purchase.component.html',
  styleUrls: ['./stock-purchase.component.css']
})
export class StockPurchaseComponent implements OnInit {
  stockQuote: StockQuote;

  // -----> List of stock orders
  stockOrders: StockOrder[];

  // -----> Stock Purchase 
  selectedStockTicker: StockTicker;
  
  // -----> for order status 
  stockOrder:StockOrder;

  constructor(
    private stockPurchaseService:StockPurchaseService
  ) { }

  ngOnInit() {
    this.getStockOrders();//@TODO move into its own component
  }

  /**
   * retrieve a listing of all stock purchases known to the system
   */
  getStockOrders(): void {
    this.stockPurchaseService.getStockOrders()
			.subscribe((stockOrders:StockOrder[]) => {
        this.stockOrders = stockOrders
      });
  }

  /**
   * Get quote for the specified ticker/symbol
   * @param ticker 
   */
  getQuote(ticker: string): void {
    // make API call to get companyInfo 
    if(ticker && ticker != ""){
      this.stockPurchaseService.getQuote(ticker)
        .subscribe((quote:StockQuote) => {
          this.stockQuote = quote;
        });
    }else{
      //@TODO handel bad inputs
    }

    this.stockOrder =  null;
  }

  /**
   * Makes a service call to place an order 
   * @param ticker 
   * @param orderQuantity 
   * @param lastPrice 
   */
  placeOrder(orderInputs:StockOrderInputs) {
    if(orderInputs.orderQuantity > 0 && orderInputs.lastPrice > 0) {
      const orderTotal = orderInputs.orderQuantity * orderInputs.lastPrice;

      this.stockPurchaseService.placeOrder(orderInputs.ticker, orderInputs.orderQuantity, orderTotal)
        .subscribe((stockOrder:StockOrder) => {
          this.stockOrder = stockOrder;
          // @TODO Display success message 
          this.getStockOrders();

          // clear the contents of the company-info and place-stock-order components
          // @NOTE I am sure thee is a better way of doing this
          this.stockQuote = null;
        },
        error => {
          this.stockOrder = new StockOrder('', '', -1, -1);// simulating a bad request response
          console.log(`There was an error white trying to place an order`);
        });
    }else{
      // @TODO handel bad inputs
    }
  }

}
