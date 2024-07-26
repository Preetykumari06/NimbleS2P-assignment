import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import PDFViewer from './Components/PDFViewer'
import InvoiceForm from './Components/InvoiceForm'
import LifecycleDemo from './Components/LifecycleDemo'

function App() {
  return (
    <div className="app-container">
       {/* <div className="pdf-viewer">
          <PDFViewer />
         </div> */}
          <div className="invoice-form">
           <InvoiceForm />
          </div>
          {/* <LifecycleDemo /> */}
    </div>
  )
}

export default App


