/**
 * Used to capture the response from the server when an order created. 
 */
export class StockOrder {

    constructor(orderID:string, orderTicker:string, orderQuantity:number, orderTotal){
        this.orderID = orderID;
        this.orderTicker = orderTicker;
        this.orderQuantity = orderQuantity;
        this.orderTotal = orderTotal;
    }

    public orderID:string;
    public orderTicker:string;
    public orderQuantity:number;
    public orderTotal:number;
}
