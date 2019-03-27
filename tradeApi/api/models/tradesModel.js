'use strict';
const uniqid = require('uniqid');
const DataStoreClass = require('../../DataStore.js');
const dataStore = new DataStoreClass();


/**
 * Get Stock Orders
 * @param {*} req 
 * @param {*} res 
 */
exports.getStockPurchases = (req, res) => {
    dataStore.loadDataFromFile();
    let ticker = req.query && req.query.ticker && req.query.ticker != "" ? req.query.ticker : null;

    if(ticker === null){
        res.status(200).send(dataStore.data.stockOrders);
    }else{
        const purchasesByTicker = dataStore.data.stockOrders.filter(x => {
            return x.orderTicker.toLowerCase() === ticker.toLowerCase()
        });

        res.status(200).send(purchasesByTicker);
    }
};

/**
 * Get Stock Order by OrderID
 * @param {*} req 
 * @param {*} res 
 */
exports.getStockPurchasesByID = (req, res) => {
    dataStore.loadDataFromFile();

    let orderID = req.query && req.query.orderID && req.query.orderID != "" ? req.query.orderID : null;

    if(orderID !== null){
        const purchasesByID = dataStore.data.stockOrders.filter(x => {
            return x.orderID === orderID
        });

        res.json(purchasesByID);
    }else{
        res.status(400).send({
            "error": 'no orderID was provided'
        });
    }
};

/**
 * Create a stock purchase
 * @param {*} req 
 * @param {*} res 
 */
exports.createStockPurchase = (req, res) => {
    dataStore.loadDataFromFile();

    const orderTicker = req.body.orderTicker;
    const orderQuantity = req.body.orderQuantity;
    const orderTotal =  req.body.orderTotal;

    const areInputsValid = validateStockPurchaseInputs(orderTicker, orderQuantity, orderTotal);

    if(areInputsValid) {
        const newStockOrder = {
            orderID: uniqid(),
            orderTicker: req.body.orderTicker,
            orderQuantity: req.body.orderQuantity,
            orderTotal: req.body.orderTotal
        }
    
        dataStore.data.stockOrders = [...dataStore.data.stockOrders, newStockOrder];
        dataStore.writeToFile(dataStore.data);

        res.status(201).send(newStockOrder);
    }else {
        res.status(400).send({
            error: 'Missing or  bad required parameter'
        });
    }
};

/**
 * Helper funciton to validate inputs to create a new stock purchase
 * @param {*} orderTicker 
 * @param {*} orderQuantity 
 * @param {*} orderTotal 
 */
function validateStockPurchaseInputs(orderTicker, orderQuantity, orderTotal){
    if(!orderTicker){
       return false;
    }

    if(!orderQuantity || orderQuantity < 0.001){
        return false;
    }

    if(!orderTotal || orderTotal < 0.001){
        return false;
    }

    return true;
}

