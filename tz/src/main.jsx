import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import "./index.css"
const root = createRoot(document.getElementById('root'))
root.render(  
  <React.Fragment>
    <App></App>
  </React.Fragment>
)

