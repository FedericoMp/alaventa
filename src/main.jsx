import './index.css'
import React from 'react'
import { Switch, Route } from 'wouter'
import ReactDOM from 'react-dom/client'

// Pages
import Product from './pages/Product'
import Products from './pages/Products'
import NotFound from './pages/NotFound'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Switch>
      <Route path="/productos" component={Products}/>
      <Route path="/producto/:id">
        {params => <Product id={params.id} />}
      </Route>
      <Route component={NotFound}/>
    </Switch>
  </React.StrictMode>,
)
