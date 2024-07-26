const express = require('express');
const { saveInvoiceDraft } = require('../controllers/invoiceController');
const invoiceRouter = express.Router();

invoiceRouter.post('/save-draft', saveInvoiceDraft);

module.exports = invoiceRouter;
