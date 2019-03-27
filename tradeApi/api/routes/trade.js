'use strict';

module.exports = function(app){
    const tradesModel = require('../models/tradesModel');

    /**
     * @swagger
     * /api/stockPurchases/:
     *   get:
     *     tags:
     *       - Stock Purchase
     *     description: Retrieve a listing of all stock purchases known to the system
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Listing of all stock purchases known to the system
     *         schema:
     *           type: array
     *           items: 
     *             type: object
     *             properties:
     *               orderID:
     *                 type: string
     *                 example: dbnc2qho9jtnf9s2x
     *               orderTicker:
     *                  type: string
     *                  example: AAPL
     *               orderQuantity:
     *                 type: number
     *                 example: 1
     *               orderTotal:
     *                 type: number
     *                 example: 192.05
     *                  
     */
    app.route('/api/stockPurchases/')
        .get(tradesModel.getStockPurchases);

     /**
     * @swagger
     * /api/stockPurchasesByID/:
     *   get:
     *     tags:
     *       - Stock Purchase
     *     description: Retrieve  stock purchases  that matchd a given orderID
     *     parameters:
     *      - in: query
     *        name: orderID
     *        required: true
     *        description: Get a purchase by id
     *        type: string
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Purchase information
     *         schema:
     *             type: object
     *             properties:
     *               orderID:
     *                 type: string
     *                 example: dbnc2qho9jtnf9s2x
     *               orderTicker:
     *                  type: string
     *                  example: AAPL
     *               orderQuantity:
     *                 type: number
     *                 example: 1
     *               orderTotal:
     *                 type: number
     *                 example: 192.05
     *       400:
     *         description: Missing orderID parameter
     *         schema:
     *           type: object
     *           properties:
     *             error:
     *               type: string
     *               example: Missing required input
     *                  
     */
    app.route('/api/stockPurchasesByID/')
        .get(tradesModel.getStockPurchasesByID);

     /**
     * @swagger
     * /api/stockPurchasesByTicker/:
     *   get:
     *     tags:
     *       - Stock Purchase
     *     description: Retrieve a listing of all stock purchases known to the system that match a given stock ticker symbol
     *     parameters:
     *      - in: query
     *        name: ticker
     *        description: Stock ticker symbol.
     *        example: AAPL
     *        required: true
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Listing of all stock purchases  that match a given stock ticker symbol
     *         schema:
     *             type: object
     *             properties:
     *               orderID:
     *                 type: string
     *                 example: dbnc2qho9jtnf9s2x
     *               orderTicker:
     *                  type: string
     *                  example: AAPL
     *               orderQuantity:
     *                 type: number
     *                 example: 1
     *               orderTotal:
     *                 type: number
     *                 example: 192.05
     *       400:
     *         description: Missing orderID parameter
     *                  
     */
    app.route('/api/stockPurchasesByTicker/')
        .get(tradesModel.getStockPurchases);

    /**
     * @swagger
     * /api/createStockPurchase/:
     *   post:
     *     tags:
     *       - Stock Purchase
     *     description: Create a stock purchase
     *     parameters:
     *      - in: body
     *        name: stock purchase
     *        description: Stock purchase to create
     *        schema:
     *            type: object
     *            required:
     *            - orderTicker
     *            - orderQuantity
     *            - orderTotal
     *            properties:
     *                orderTicker:
     *                    type: string
     *                    required: true
     *                    example: AAPL
     *                orderQuantity:
     *                  type: number
     *                  example: 1
     *                orderTotal:
     *                  type: number
     *                  example: 192.05
     *     responses:
     *       201:
     *         description: Created stock purchase
     *         schema:
     *             type: object
     *             properties:
     *                 orderID:
     *                   type: string
     *                   example: dbnc2qho9jtnf9s2x
     *                 orderTicker:
     *                    type: string
     *                    example: AAPL
     *                 orderQuantity:
     *                   type: number
     *                   example: 1
     *                 orderTotal:
     *                   type: number
     *                   example: 192.05
     *       400:
     *         description: Missing required parameter
     */
    app.route('/api/createStockPurchase/')
        .post(tradesModel.createStockPurchase);
};