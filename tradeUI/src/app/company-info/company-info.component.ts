import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { StockQuote } from '../stockQuote';


/**
 * 
 */
@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnChanges, OnInit {
  // used to display the company info/quote on the view
  @Input() stockQuote: StockQuote;

  constructor() { }

  ngOnInit() {
   
  }

  ngOnChanges(changes: SimpleChanges) {
    this.stockQuote = changes.stockQuote.currentValue;
  }

}
