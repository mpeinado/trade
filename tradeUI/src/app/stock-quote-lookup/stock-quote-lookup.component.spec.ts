import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockQuoteLookupComponent } from './stock-quote-lookup.component';

describe('StockQuoteLookupComponent', () => {
  let component: StockQuoteLookupComponent;
  let fixture: ComponentFixture<StockQuoteLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockQuoteLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockQuoteLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
