import React from 'react';

const DummyForm = () => {
  const dummyData = {
    currency: 'INR',
    invBasicAmt: '15000',
    invTaxAmt: '1000',
    totalInvAmtInclTax: '16000',
    advancePaid: '0.00',
    tcsApplicable: 'No',
    netPayableAmtExclTds: '16000',
  };

  return (
    <form>
      <h2 style={{ color: 'purple', backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}>INVOICE AMOUNT DETAILS</h2>
      <label className="form-group">
        Currency :
        <input type="text" value={dummyData.currency} readOnly />
      </label>
      <label className="form-group">
        Inv Basic Amt :
        <input type="text" value={dummyData.invBasicAmt} readOnly />
      </label>
      <label className="form-group">
        Inv Tax Amt :
        <input type="text" value={dummyData.invTaxAmt} readOnly />
      </label>
      <label className="form-group">
        Total Inv Amt [Incl. of tax] :
        <input type="text" value={dummyData.totalInvAmtInclTax} readOnly />
      </label>
      <label className="form-group">
        Advance Paid :
        <input type="text" value={dummyData.advancePaid} readOnly />
      </label>
      <label className="form-group">
        TCS Applicable :
        <input type="text" value={dummyData.tcsApplicable} readOnly />
      </label>
      <label className="form-group">
        Net Payable Amount[Excl. of TDS] :
        <input type="text" value={dummyData.netPayableAmtExclTds} readOnly style={{flex: 1}}/>
      </label>
    </form>
  );
};

export default DummyForm;
0