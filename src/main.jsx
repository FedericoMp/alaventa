import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';

// Page'
import Products from './pages/Products'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Products/>
    </HelmetProvider>
  </React.StrictMode>,
)
