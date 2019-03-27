import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceStockOrderComponent } from './place-stock-order.component';

describe('PlaceStockOrderComponent', () => {
  let component: PlaceStockOrderComponent;
  let fixture: ComponentFixture<PlaceStockOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceStockOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceStockOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
