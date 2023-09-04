const express = require('express');
const { getBillionaires } = require('./billionaires.controller');

const billionairesRouter = express.Router();
billionairesRouter.get('/', getBillionaires);

module.exports = billionairesRouter;
