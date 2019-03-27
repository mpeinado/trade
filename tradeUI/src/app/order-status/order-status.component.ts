import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { StockOrder } from '../stockOrder';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {

  constructor() { }

  @Input() stockOrder:StockOrder;

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.stockOrder = changes.stockOrder.currentValue;
  }

}
