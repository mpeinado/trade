import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import { StockPurchaseService } from '../stock-purchase.service';
import { StockTicker } from '../stockTicker';
import { Observable, Subject, merge } from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-stock-quote-lookup',
  templateUrl: './stock-quote-lookup.component.html',
  styleUrls: ['./stock-quote-lookup.component.css']
})
export class StockQuoteLookupComponent implements OnInit {
  // -----> Typeahead / symbol search
  // this is used as the symbols/tickers for the typeahead 
  universeTickers:string[];
  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  @Output() getQuote = new EventEmitter();

  constructor(
    private stockPurchaseService:StockPurchaseService
  ) { }

  ngOnInit() {
    this.loadUniverse();// to populate the typeahead 
  }

  /**
   * Gets the symbol/ticker universe to be displayed on the typeahead
   * @TODO I might want to use the object instead of just the symbol. e.g symbold.id
   */
  loadUniverse():void {
		this.stockPurchaseService.getSymbolUniverse()
			.subscribe((universe:StockTicker[]) => this.universeTickers = universe.map((x) => {
        return x.symbol
      }));
  }

  /**
   * Typeahead functionality 
   * https://ng-bootstrap.github.io/#/components/typeahead/examples
   */
  stockTickerSearch = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => term.length < 2 ? []
        : this.universeTickers.filter(ticker => ticker.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );
  }

  /**
   * this will call getQuote() on the parent (stock-purchase.component.ts)
   */
  fireGetQuote(ticker:string) {
    this.getQuote.emit(ticker);
  }

}
