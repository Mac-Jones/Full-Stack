const express = require('express');

const {
	httpGetAllNewBillionaires,
	httpAddNewBillionaire,
} = require('./new-billionaires.controller');

const newBillionairesRouter = express.Router();

newBillionairesRouter.get('/', httpGetAllNewBillionaires);
newBillionairesRouter.post('/', httpAddNewBillionaire);

module.exports = newBillionairesRouter;
