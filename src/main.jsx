import './index.css'
import React from 'react'
import { Switch, Route } from 'wouter'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';

// Pages
import Home from './pages/Home'
import Product from './pages/Product'
import Products from './pages/Products'
import NotFound from './pages/NotFound'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/productos" component={Products}/>
        <Route path="/producto/:id">
          {params => <Product id={params.id} />}
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </HelmetProvider>
  </React.StrictMode>,
)
