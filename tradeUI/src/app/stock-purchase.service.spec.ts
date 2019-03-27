import { TestBed } from '@angular/core/testing';

import { StockPurchaseService } from './stock-purchase.service';

describe('StockPurchaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockPurchaseService = TestBed.get(StockPurchaseService);
    expect(service).toBeTruthy();
  });
});
