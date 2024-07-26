import React from 'react';
import dummyPdf from '../Images/dummy.pdf'; 

const PDFViewer = () => {
  return (
    <div>
      {/* <h2>PDF Viewer</h2> */}
      <iframe src={dummyPdf} width="100%" height="600px"></iframe>
    </div>
  );
};

export default PDFViewer;
