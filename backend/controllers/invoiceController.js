const InvoiceMongo = require('../models/invoiceM');
const { Invoice: InvoiceSQL } = require('../models/invoiceS');

exports.saveInvoiceDraft = async (req, res) => {
  try {
    // Save to MongoDB
    const invoiceMongo = new InvoiceMongo(req.body);
    await invoiceMongo.save();

    // Save to MySQL
    await InvoiceSQL.create(req.body);

    res.status(200).json({ message: 'Invoice draft saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving invoice draft', error });
  }
};
