import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './routes/route'
import ContextProvider from './context/authContext'
import ProductProvider from './context/productContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
    <ProductProvider>
   <RouterProvider router={route}/>
   </ProductProvider>
   </ContextProvider>
  </React.StrictMode>,
)
