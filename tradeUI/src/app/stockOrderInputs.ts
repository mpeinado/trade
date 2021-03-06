/**
 * Used to model the input need to place a stock order. 
 */
export class StockOrderInputs {
    constructor(ticker:string, orderQuantity:number, lastPrice:number) {
        this.ticker = ticker;
        this.orderQuantity = orderQuantity;
        this.lastPrice = lastPrice;
    }

    public ticker:string;
    public orderQuantity:number;
    public lastPrice:number;
}
