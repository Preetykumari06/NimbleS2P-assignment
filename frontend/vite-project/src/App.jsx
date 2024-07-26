import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PDFViewer from './Components/PDFViewer'
import InvoiceForm from './Components/InvoiceForm'
import InvoiceAmt from './Components/InvoiceAmt'

function App() {
  return (
    <div className="app-container">
       <div className="pdf-viewer">
          <PDFViewer />
         </div>
          <div className="invoice-form">
           <InvoiceAmt />
           <InvoiceForm />
          </div>
          
    </div>
  )
}

export default App


