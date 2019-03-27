import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StockTicker } from './stockTicker';
import { StockQuote } from './stockQuote';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockPurchaseService {
  constructor(
    private http: HttpClient
  ) { 

  }

  getSymbolUniverse() {
    return this.http.get('https://api.iextrading.com/1.0/ref-data/symbols');
  }

  getStockOrders() {
    return this.http.get('http://localhost:4000/api/stockPurchases/');
  }

  getQuote(ticker:string): Observable<StockQuote>{
    return this.http.get<StockQuote>(`https://api.iextrading.com/1.0/stock/${ticker}/quote`);
  }

  placeOrder(ticker:string, orderQuantity:number, orderTotal:number) {
    const postBody = {
      "orderTicker": ticker,
      "orderQuantity": orderQuantity,
      "orderTotal": orderTotal
    };

    return this.http.post('http://localhost:4000/api/createStockPurchase/', postBody);
  };
}
