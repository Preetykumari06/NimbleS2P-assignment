import axios from 'axios';

const api = {
  saveInvoiceDraft: (data) => axios.post('/invoices/save-draft', data),
};

export default api;
